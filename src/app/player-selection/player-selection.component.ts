import { Component, OnInit } from '@angular/core';
import { PlayerObject } from '../models/PlayerObject';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {
  enoughPlayers: boolean;
  constructor(
    public data: DataService,
    private _snackBar: MatSnackBar,
    private utility: UtilityService
  ) {}

  isMobile: boolean;

  ngOnInit() {
    this.data.clearPlayerArr();
    if (this.data.playerCount() < 1) {
      this.enoughPlayers = false;
    } else {
      this.enoughPlayers = true;
    }
    this.isMobile = this.utility.GetMediaQuery();
  }

  pushPlayer(nameInput: string) {
    if (nameInput === '') {
      this.noPlayerEnteredSnackBar();
    } else {
      var playerObject = new PlayerObject(nameInput);
      this.data.addPlayer(playerObject);
      this.enoughPlayers = true;
      this.playerAddedSnackBar(nameInput);
    }
  }
  removePlayer(playerToDelete: PlayerObject) {
    const index = this.data.playerArray.indexOf(playerToDelete, 0);
    if (index > -1) {
      this.data.playerArray.splice(index, 1);
    }
    this.playerRemovedSnackBar(playerToDelete.playerName);
    if (this.data.playerArray.length === 0) {
      this.enoughPlayers = false;
    }
  }

  playerAddedSnackBar(name: string) {
    this._snackBar.open(name + ' added!', 'Hide', {
      duration: 2000
    });
  }

  noPlayerEnteredSnackBar() {
    this._snackBar.open('Please enter a player name!', 'Hide', {
      duration: 2000
    });
  }
  playerRemovedSnackBar(name: string) {
    this._snackBar.open(name + ' removed!', 'Hide', {
      duration: 2000
    });
  }
}
