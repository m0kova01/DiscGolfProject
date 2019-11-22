import { Component, OnInit } from "@angular/core";
import { PlayerObject } from "../app.component";

@Component({
  selector: "app-player-selection",
  templateUrl: "./player-selection.component.html",
  styleUrls: ["./player-selection.component.css"]
})
export class PlayerSelectionComponent implements OnInit {
  players: PlayerObject[];

  constructor() {}

  ngOnInit() {
    this.players = [];
  }

  addNewPlayer() {
    var element = <HTMLInputElement>document.getElementById("nameInput");
    var nameInput = (<HTMLInputElement>document.getElementById("nameInput"))
      .value;
    var playerObject = new PlayerObject(nameInput);
    this.players.push(playerObject);
    element.value = "";
  }
}