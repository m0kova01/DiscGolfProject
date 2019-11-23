import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PlayerObject } from "./app.component";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private playerArray: PlayerObject[];
  constructor() {
    this.playerArray = [];
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

  returnEachPlayerScore(index: number) {
    return this.playerArray[index].totalScore;
  }
  addToScores(numberToAdd: number, index: number) {
    this.playerArray[index].scores.push(numberToAdd);
  }

  totalScores(index: number) {
    for(var i = 0; i < this.playerCount(); i++)
    {
      this.playerArray[i].totalScore = this.playerArray[index].scores.reduce((x, y) => x + y);
    } 
  }
}
