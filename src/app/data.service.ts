import { Injectable } from "@angular/core";
import { PlayerObject } from "./app.component";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private playerArray: PlayerObject[];
  arrayOfHighScores: PlayerObject[];

  constructor() {
    this.playerArray = [];
    this.arrayOfHighScores = [];
  }

  //adds players to array
  addPlayer(player: PlayerObject) {
    this.playerArray.push(player);
  }
  //returns selected player's name
  returnIndexName(index: number) {
    return this.playerArray[index].playerName;
  }
  //returns the amount of players
  playerCount() {
    return this.playerArray.length;
  }
  //adds a score to a certain player's array of scores
  addToScores(numberToAdd: number, index: number) {
    this.playerArray[index].scores.push(numberToAdd);
  }
  //returns the total score for the selected player
  returnIndexTotalScore(index: number) {
    return this.playerArray[index].totalScore;
  }
  //adds up every player's scores
  totalScores() {
    for (var i = 0; i < this.playerCount(); i++) {
      this.playerArray[i].totalScore = this.playerArray[i].scores.reduce(
        (x, y) => x + y
      );
    }
  }
  //sorts and returns the playerArray based on top score
  insertionSort() {
    for (var i = 1; i < this.playerArray.length; i++) {
      var temp = this.playerArray[i];
      var key = this.playerArray[i].totalScore;
      var j = i - 1;
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
  clearHighscores(){
    this.arrayOfHighScores = [];
    localStorage.setItem(
      "arrayOfHighScores",
      JSON.stringify(this.arrayOfHighScores)
    )
  }

  generateNewHighScores(currentGameScores: PlayerObject[]) {
    //add current game's scores to the array of highscores
    for (var i = 0; i < this.playerArray.length; i++) {
      this.arrayOfHighScores.push(currentGameScores[i]);
    }

    //sort the array of highscores
    for (var i = 1; i < this.arrayOfHighScores.length; i++) {
      var temp = this.arrayOfHighScores[i];
      var key = this.arrayOfHighScores[i].totalScore;
      var j = i - 1;
      while (j >= 0 && this.arrayOfHighScores[j].totalScore > key) {
        this.arrayOfHighScores[j + 1] = this.arrayOfHighScores[j];
        j--;
      }
      this.arrayOfHighScores[j + 1] = temp;
    }

    //remove anything after the 10th spot
    while (this.arrayOfHighScores.length > 10) {
      this.arrayOfHighScores.pop();
    }
    localStorage.setItem(
      "arrayOfHighScores",
      JSON.stringify(this.arrayOfHighScores)
    );
  }

  returnHighScores() {
    var retrievedList = localStorage.getItem("arrayOfHighScores");
    this.arrayOfHighScores = (JSON.parse(retrievedList));
    return this.arrayOfHighScores;
  }
}
