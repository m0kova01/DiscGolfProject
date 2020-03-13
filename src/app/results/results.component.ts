import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PeriodicElement } from '../highscores/highscores.component';
import { PlayerObject } from '../models/PlayerObject';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'score'];
  sortedPlayersAndScores: PlayerObject[];
  resultsData: PeriodicElement[];
  isMobile: boolean;

  constructor(private data: DataService, private utility: UtilityService) { }

  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();

    this.data.totalScores();
    this.sortedPlayersAndScores = this.data.insertionSort();
    this.resultsData = [];

    for (let i = 0; i < this.data.playerCount(); i++) {
      this.resultsData[i] = {
        position: i + 1,
        name: this.sortedPlayersAndScores[i].playerName,
        score: this.sortedPlayersAndScores[i].totalScore
      };
    }
    this.data.generateNewHighScores(this.sortedPlayersAndScores);
  }

  clearPlayers() {
    this.data.clearPlayerArr();
  }
}
