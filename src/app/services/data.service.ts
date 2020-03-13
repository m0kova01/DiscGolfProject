import { Injectable } from '@angular/core';
import { PlayerObject } from '../models/PlayerObject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public playerArray: PlayerObject[];
  arrayOfHighScores: PlayerObject[];
  holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  constructor() {
    this.playerArray = [];
    this.arrayOfHighScores = [];
  }

  addPlayer(player: PlayerObject) {
    this.playerArray.push(player);
  }
  returnIndexName(index: number) {
    return this.playerArray[index].playerName;
  }
  playerCount() {
    return this.playerArray.length;
  }
  addToScores(numberToAdd: number, index: number) {
    this.playerArray[index].scores.push(numberToAdd);
  }
  returnIndexTotalScore(index: number) {
    return this.playerArray[index].totalScore;
  }
  totalScores() {
    for (let i = 0; i < this.playerCount(); i++) {
      this.playerArray[i].totalScore = this.playerArray[i].scores.reduce(
        (x, y) => x + y,
        0
      );
    }
  }
  insertionSort() {
    for (let i = 1; i < this.playerArray.length; i++) {
      const temp = this.playerArray[i];
      const key = this.playerArray[i].totalScore;
      let j = i - 1;
      while (j >= 0 && this.playerArray[j].totalScore > key) {
        this.playerArray[j + 1] = this.playerArray[j];
        j--;
      }
      this.playerArray[j + 1] = temp;
    }

    return this.playerArray;
  }

  clearPlayerArr() {
    this.playerArray = [];
  }
  clearHighscores() {
    this.arrayOfHighScores = [];
    localStorage.setItem(
      'arrayOfHighScores',
      JSON.stringify(this.arrayOfHighScores)
    );
  }

  generateNewHighScores(currentGameScores: PlayerObject[]) {
    for (let i = 0; i < this.playerArray.length; i++) {
      this.arrayOfHighScores.push(currentGameScores[i]);
    }

    for (let i = 1; i < this.arrayOfHighScores.length; i++) {
      const temp = this.arrayOfHighScores[i];
      const key = this.arrayOfHighScores[i].totalScore;
      let j = i - 1;
      while (j >= 0 && this.arrayOfHighScores[j].totalScore > key) {
        this.arrayOfHighScores[j + 1] = this.arrayOfHighScores[j];
        j--;
      }
      this.arrayOfHighScores[j + 1] = temp;
    }

    while (this.arrayOfHighScores.length > 10) {
      this.arrayOfHighScores.pop();
    }
    localStorage.setItem(
      'arrayOfHighScores',
      JSON.stringify(this.arrayOfHighScores)
    );
  }

  returnHighScores() {
    const retrievedList = localStorage.getItem('arrayOfHighScores');
    this.arrayOfHighScores = JSON.parse(retrievedList);
    return this.arrayOfHighScores;
  }
}
