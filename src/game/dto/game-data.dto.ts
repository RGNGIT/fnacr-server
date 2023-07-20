export class GameSession {
  CandyPos: number = 1;
  CandyCoordinateX: number;
  CandyCoordinateY: number;
  CindyPos: number = 1;
  CindyCoordinateX: number;
  CindyCoordinateY: number;
  ChesterPos: number = -1;
  ChecterCoordinateX: number;
  ChesterCoordinateY: number;
  PenguinPos: number = -1;
  PenguinCoordinateX: number;
  PenguinCoordinateY: number;
  OldCandyPos: number = 10;
  OldCandyCoordinateX: number;
  OldCandyCoordinateY: number;
  BlankPos: number = 0;
  RatPos: number = 13;
  RatCoordinateX: number;
  RatCoordinateY: number;
  RightDoorClosed: boolean = false;
  LeftDoorClosed: boolean = false;
  FrontDoorClosed: boolean = false;
  Time: number = 0;
  ScaringBy: number | null = null;
  EndFlag: boolean = false;
}