import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { PeriodicElement } from "../highscores/highscores.component";
import { PlayerObject } from "../app.component";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "score"];
  sortedPlayersAndScores: PlayerObject[];
  resultsData: PeriodicElement[];

  constructor(private data: DataService) {
    this.data.totalScores();
    this.sortedPlayersAndScores = this.data.insertionSort();
    this.resultsData = [];

    for (var i = 0; i < this.data.playerCount(); i++) {
      this.resultsData[i] = {
        position: i + 1,
        name: this.sortedPlayersAndScores[i].playerName,
        score: this.sortedPlayersAndScores[i].totalScore
      };
    }
  }
  ngOnInit() {}

  clearPlayers() {
    this.data.generateNewHighScores(this.sortedPlayersAndScores);
    this.data.clearPlayerArr();
  }
}


