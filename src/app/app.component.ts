import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "disc-golf-project";
}

export class PlayerObject {
  constructor(playerName: string) {
    this.playerName = playerName;
  }
  playerName: string;
  scores: number[];
  totalScore: number;
  scoreIndex: number = 0;

//   addToScore(holeScore: number) {
//     this.scores[this.scoreIndex] = holeScore;
//     this.scoreIndex++;
//   }
}