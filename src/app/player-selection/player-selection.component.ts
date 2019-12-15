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
  ) {}

  isMobile: boolean;

  ngOnInit() {
    if (this.data.playerCount() < 1) {
      this.enoughPlayers = false;
    } else {
      this.enoughPlayers = true;
    }
    this.isMobile = this.utility.GetMediaQuery();
    this.addEnterEventListener();
  }

  addEnterEventListener() {
    var nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        document.getElementById("add-player-btn").click();
      }
    });
  }

  pushPlayer() {
    var element = <HTMLInputElement>document.getElementById("nameInput");
    var nameInput = (<HTMLInputElement>document.getElementById("nameInput"))
      .value;
    if (nameInput === "") {
      this.noPlayerEnteredSnackBar();
    } else {
      var playerObject = new PlayerObject(nameInput);
      this.data.addPlayer(playerObject);
      this.enoughPlayers = true;
      this.playerAddedSnackBar(nameInput);
      element.value = "";
    }
  }

  playerAddedSnackBar(name: string) {
    this._snackBar.open(name + " added!", "Hide", {
      duration: 2000
    });
  }

  noPlayerEnteredSnackBar() {
    this._snackBar.open("Please enter a player name!", "Hide", {
      duration: 2000
    });
  }
}
