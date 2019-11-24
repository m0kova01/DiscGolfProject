import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { PlayerAndIndex } from "../game/game.component";
import { PlayerObject } from "../app.component";

export interface PeriodicElement {
  position: number;
  name: string;
  score: number;
}

@Component({
  selector: "app-highscores",
  templateUrl: "./highscores.component.html",
  styleUrls: ["./highscores.component.css"]
})
export class HighscoresComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "score"];
  dataSource: PeriodicElement[];
  listOfScores: PlayerObject[];

  constructor(private data: DataService) {
    
    this.listOfScores = this.data.returnHighScores();
    this.dataSource = [];
    if (this.listOfScores != null) {
      for (var i = 0; i < this.listOfScores.length; i++) {
        this.dataSource[i] = {
          position: i + 1,
          name: this.listOfScores[i].playerName,
          score: this.listOfScores[i].totalScore
        };
      }
    }
  }

  ngOnInit() {}

  goHome() {
    this.data.generateNewHighScores(this.listOfScores);
    this.data.clearPlayerArr();
  }
}
