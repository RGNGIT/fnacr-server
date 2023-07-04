import { GameData } from "src/game/dto/game-data.dto";

export class LobbyData {
  Id: string;
  GameSession: GameData | null = null;
  Leader: string;
  Players: string[] = [];
  AsCandy: string | null = null;
  AsCindy: string | null = null;
  AsChester: string | null = null;
  AsPenguin: string | null = null;
  AsOldCandy: string | null = null;
  AsBlank: string | null = null;
  AsRat: string | null = null;
  PlayerAmount: string;
}