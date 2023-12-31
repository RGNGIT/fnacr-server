import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './data/data.controller';
import { GameController } from './game/game.controller';

@Module({
  imports: [],
  controllers: [AppController, DataController, GameController],
  providers: [AppService],
})
export class AppModule {}
