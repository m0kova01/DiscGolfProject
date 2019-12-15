import { Component, OnInit, OnChanges } from "@angular/core";
import { DataService } from "../services/data.service";
import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { UtilityService } from "../services/utility.service";
import { PlayerObject } from '../models/PlayerObject';

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  isMobile: boolean;
  playerArray: PlayerObject[];
  formGroup: FormGroup;

  constructor(public data: DataService, private utility: UtilityService) {}

  ngOnInit() {
    this.playerArray = this.data.playerArray;
    this.isMobile = this.utility.GetMediaQuery();

    var nameArray = new FormArray([]);
    this.playerArray.forEach(element => {
      var scoresArray = new FormArray([]);
      nameArray.push(scoresArray);
      this.data.holes.forEach(element => {
        scoresArray.push(new FormControl(""));
      });
    });
    this.formGroup = new FormGroup({
      values: nameArray
    });
  }

  addScoresToArray() {
    var firstArray = this.formGroup.value.values;
    for (var i = 0; i < this.playerArray.length; i++) {
      for (var j = 0; j < 18; j++) {
        if (firstArray[i][j] > 0) { //can't get a negative score
          this.data.addToScores(firstArray[i][j], i);
        } else {
          this.data.addToScores(0, i);
        }
      }
    }
  }
}

