import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PlayerObject } from '../models/PlayerObject';
import { UtilityService } from '../services/utility.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  position: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource: PeriodicElement[];
  listOfScores: PlayerObject[];
  isMobile: boolean;

  constructor(
    private data: DataService,
    private utility: UtilityService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();

    this.listOfScores = this.data.returnHighScores();
    this.dataSource = [];
    if (this.listOfScores != null) {
      for (let i = 0; i < this.listOfScores.length; i++) {
        this.dataSource[i] = {
          position: i + 1,
          name: this.listOfScores[i].playerName,
          score: this.listOfScores[i].totalScore
        };
      }
    }
  }

  clearHighscores() {
    this.data.clearHighscores();
    this.dataSource = [];
    this.clearHighscoresSnackBar();
  }

  clearHighscoresSnackBar() {
    this.snackBar.open('Highscores cleared!', 'Hide', {
      duration: 2000
    });
  }
}
