import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PlayerObject } from "./app.component";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private playerArray: PlayerObject[];
  // private playerIndex: number = 0;
  constructor() {
    this.playerArray = [];
  }
  
  addPlayer(player: PlayerObject) {
    this.playerArray.push(player);
    // this.playerIndex++
  }
  returnIndexName(index: number) {
    return this.playerArray[index].playerName;
  }
  playerCount() {
    return this.playerArray.length;
  }
  returnEachPlayerObject() {
    return this.playerArray;
  }
  addToScores(holesArray: number[], index: number) {
    for (var i = 0; i < holesArray.length; i++) {
      this.playerArray[index].scores.push(holesArray[i]);
    }
  }

  totalScores(index: number) {
    return this.playerArray[index].scores.reduce((x, y) => x + y);
  }
}
