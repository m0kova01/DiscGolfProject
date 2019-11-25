import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "disc-golf-project";
}

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
