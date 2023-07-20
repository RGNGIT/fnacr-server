import { LobbyData } from "../data/dto/lobby-data.dto";

export enum Animatronics {
  Candy = 1,
  Cindy = 2,
  Chester = 3,
  Penguin = 4,
  OldCandy = 5,
  Blank = 6, 
  Rat = 7
}

export let lobbies: LobbyData[] = [];

(() => {
  const lobby = new LobbyData();
  lobby.Leader = "TestLeader1";
  lobby.Id = "00000";
  lobbies.push(lobby);
})();