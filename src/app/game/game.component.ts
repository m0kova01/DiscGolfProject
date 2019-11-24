import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { PlayerObject } from "../app.component";
import { FormGroup, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  playerAndID: PlayerAndIndex[];
  formGroup: FormGroup;
  holes: number[];
  constructor(private data: DataService) {
    this.playerAndID = [];
    this.holes = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ];
    for (var i = 0; i < this.data.playerCount(); i++) {
      this.playerAndID.push(
        new PlayerAndIndex(this.data.returnIndexName(i), i)
      );
    }

    var nameArray = new FormArray([]);
    this.playerAndID.forEach(element => {
      var scoresArray = new FormArray([]);
      nameArray.push(scoresArray);
      this.holes.forEach(element => {
        scoresArray.push(new FormControl(""));
      });
    });
    this.formGroup = new FormGroup({
      values: nameArray
    });
  }

  ngOnInit() {}

  addScoresToArray() {
    var firstArray = this.formGroup.value.values;
    for (var i = 0; i < this.playerAndID.length; i++) {
      for (var j = 0; j < 18; j++) {
        if (firstArray[i][j] > 0) {
          this.data.addToScores(firstArray[i][j], i);
        } else {
          this.data.addToScores(0, i);
        }
      }
    }
  }
}
export class PlayerAndIndex {
  name: string;
  index: number;
  constructor(theName: string, id: number) {
    this.name = theName;
    this.index = id;
  }
}
