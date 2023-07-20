import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { lobbies, Animatronics } from '../const';
import { GameSession } from './dto/game-data.dto';

@Controller('game')
export class GameController {
  @Get('gameData/:lobbyId')
  gameData(@Param('lobbyId') lobbyId: string): GameSession {
    const game = (lobbies.find(item => item.Id == lobbyId))?.GameSession;
    return game;
  }
  @Get('/animatronicCommand/:lobbyId/:character/:command/:arg')
  animatronicCommand(
    @Param('lobbyId') lobbyId: string,
    @Param('character') character: string,
    @Param('command') command: string,
    @Param('arg') arg: string
  ): GameSession {
    const resolvePositionData = (positionObj: string): { pos: string, x: string, y: string } => {
      positionObj = positionObj.replace('[', '');
      positionObj = positionObj.replace(']', '');
      const split = positionObj.split(',');
      return { pos: split[0], x: split[1], y: split[2] };
    }
    const characterProcessor = () => {
      switch (command) {
        case "Pos":
          const position = resolvePositionData(arg);
          console.log(position);
          game[`${character}Pos`] = Number(position.pos);
          game[`${character}CoordinateX`] = Number(position.x);
          game[`${character}CoordinateY`] = Number(position.y);
          break;
        case "Scare":
          game.ScaringBy = Number(Animatronics[character]);
          break;
      }
    }
    const lobby = lobbies.find(item => item.Id == lobbyId);
    const game = lobby?.GameSession;
    characterProcessor();
    console.log(game);
    return game;
  }
  @Post('updateGameData/:lobbyId')
  updateGameData(@Body() gameDataToUpdate, @Param('lobbyId') lobbyId: string): GameSession {
    const lobby = lobbies.find(item => item.Id == lobbyId);
    const game = lobby?.GameSession;
    console.log(game);
    for (const field in gameDataToUpdate) {
      if (!field.includes("Pos")) {
        game[field] = gameDataToUpdate[field];
      } else if (field.includes("Pos") && !lobby[`As${field.split('Pos')[0]}`]) {
        game[field] = Number(gameDataToUpdate[field]);
      }
    }
    return game;
  }
}
