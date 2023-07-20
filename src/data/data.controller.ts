import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { LobbyData } from './dto/lobby-data.dto';
import { lobbies } from '../const';
import { GameSession } from '../game/dto/game-data.dto';

@Controller('data')
export class DataController {
  @Get('lobbyInfo/:id')
  lobbyInfo(@Param('id') lobbyId: string): LobbyData | string {
    const lobby: LobbyData = lobbies.find(item => item.Id == lobbyId);
    console.log(lobby);
    return lobby ? { ...lobby, PlayerAmount: (lobby.Players.length + 1).toString() } : "NOT_FOUND";
  }
  @Post('createLobby')
  createLobby(@Body() leader): LobbyData {
    let lobby = new LobbyData();
    lobby.Id = Math.floor(10000 + Math.random() * 90000).toString();
    lobby.Leader = leader.Name;
    lobbies.push(lobby);
    return { ...lobby, PlayerAmount: (lobby.Players.length + 1).toString() };
  }
  @Post('connectToLobby/:id')
  connectToLobby(@Body() player, @Param('id') lobbyId: string) {
    const lobby: LobbyData = lobbies.find(item => item.Id == lobbyId);
    console.log(lobby);
    lobby.Players.push(player.Name);
    return lobby ? { ...lobby, PlayerAmount: (lobby.Players.length + 1).toString() } : "NOT_FOUND";
  }
  @Post('disconnectFromLobby/:id')
  disconnectFromLobby(@Body() player, @Param('id') lobbyId: string) {
    const lobby = lobbies.find(item => item.Id == lobbyId);
    if (player.Name == lobby.Leader) {
      lobbies.filter(item => item.Id == lobby.Id);
      return;
    }
    lobby.Players.filter(name => name == player.Name);
  }
  @Post('claimCharacter/:who')
  claimCharacter(@Body() player, @Query('lobbyId') lobbyId: string, @Param('who') who: string): LobbyData {
    let lobby = lobbies.find(item => item.Id == lobbyId);
    for (const field in lobby) {
      if (field.includes("As"))
        if (lobby[field] == player.Name) {
          lobby[field] = null;
        }
    }
    if (!lobby[`As${who}`]) {
      lobby[`As${who}`] = player.Name;
    }
    return { ...lobby, PlayerAmount: (lobby.Players.length + 1).toString() };
  }
  @Get('startGame/:lobbyId')
  startGame(@Param('lobbyId') lobbyId: string, @Query('difficulty') difficulty: number): LobbyData {
    let lobby = lobbies.find(item => item.Id == lobbyId);
    lobby.BotDifficulty = Number(difficulty);
    lobby.GameSession = new GameSession();
    lobby.StartFlag = true;
    console.log(lobby);
    return lobby;
  }
}
