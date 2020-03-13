import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { UtilityService } from '../services/utility.service';
import { PlayerObject } from '../models/PlayerObject';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  isMobile: boolean;
  playerArray: PlayerObject[];
  formGroup: FormGroup;

  constructor(public data: DataService, private utility: UtilityService) { }

  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();
    this.playerArray = this.data.playerArray;

    const nameArray = new FormArray([]);
    this.playerArray.forEach(element => {
      element.CurrentScore = 0;
      const scoresArray = new FormArray([]);
      nameArray.push(scoresArray);
      this.data.holes.forEach(() => {
        scoresArray.push(new FormControl(''));
      });
    });
    this.formGroup = new FormGroup({
      values: nameArray
    });
  }

  addScoresToArray() {
    const firstArray = this.formGroup.value.values;
    for (let i = 0; i < this.playerArray.length; i++) {
      for (let j = 0; j < 18; j++) {
        if (firstArray[i][j] > 0) {
          this.data.addToScores(firstArray[i][j], i);
        } else {
          this.data.addToScores(0, i);
        }
      }
    }
  }

  refreshScores(): void {
    const firstArray = this.formGroup.value.values;
    for (let i = 0; i < this.playerArray.length; i++) {
      this.playerArray[i].CurrentScore = 0;
      for (let j = 0; j < 18; j++) {
        if (firstArray[i][j] > 0) {
          this.playerArray[i].CurrentScore += firstArray[i][j];
        }
      }
    }
  }
}
