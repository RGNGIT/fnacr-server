import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { lobbies } from '../const';
import { GameData } from './dto/game-data.dto';

@Controller('game')
export class GameController {
  @Get('gameData/:lobbyId')
  gameData(@Param('lobbyId') lobbyId: string): GameData {
    const game = (lobbies.find(item => item.Id == lobbyId))?.GameSession;
    return game;
  }
  @Post('updateGameData/:lobbyId')
  updateGameData(@Body() gameDataToUpdate, @Param('lobbyId') lobbyId: string): GameData {
    const game = (lobbies.find(item => item.Id == lobbyId))?.GameSession;
    for(const field in gameDataToUpdate) {
      game[field] = gameDataToUpdate[field];
    }
    return game;
  }
}
