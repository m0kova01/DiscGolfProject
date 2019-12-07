import { Component, OnInit } from "@angular/core";
import { PlayerObject } from "../models/PlayerObject";
import { DataService } from "../services/data.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UtilityService } from "../services/utility.service";

@Component({
  selector: "app-player-selection",
  templateUrl: "./player-selection.component.html",
  styleUrls: ["./player-selection.component.css"]
})
export class PlayerSelectionComponent implements OnInit {
  enoughPlayers: boolean;
  constructor(
    private data: DataService,
    private _snackBar: MatSnackBar,
    private utility: UtilityService
  ) {
    if(this.data.playerCount() < 1)
    {
      this.enoughPlayers = false;
    }
    else
    {
      this.enoughPlayers = true;
    }
  }

  isMobile: boolean;

  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();
  }

  pushPlayer() {
    var element = <HTMLInputElement>document.getElementById("nameInput");
    var nameInput = (<HTMLInputElement>document.getElementById("nameInput"))
      .value;
    if(nameInput === "") {
      this.noPlayerEnteredSnackBar();
    }
    else {
    var playerObject = new PlayerObject(nameInput);
    this.data.addPlayer(playerObject);
    this.enoughPlayers = true;
    this.playerAddedSnackBar();
    element.value = "";
    }
  }

  playerAddedSnackBar() {
    var nameInput = (<HTMLInputElement>document.getElementById("nameInput"))
      .value;
    this._snackBar.open(nameInput + " added!", "Hide", {
      duration: 2000
    });
  }

  noPlayerEnteredSnackBar() {
    this._snackBar.open("Please enter a player name!", "Hide", {
      duration: 2000
    });
  }
}
