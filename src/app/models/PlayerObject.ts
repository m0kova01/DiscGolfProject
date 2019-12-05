export class PlayerObject {
  constructor(playerName: string) {
    this.playerName = playerName;
    this.scores = [];
    this.totalScore = 0;
  }
  playerName: string;
  scores: number[];
  totalScore: number;
}
