import { Component, OnInit } from "@angular/core";
import { PlayerObject } from "../app.component";
import { setDefaultService } from "selenium-webdriver/chrome";
import { DataService } from "../data.service";

@Component({
  selector: "app-player-selection",
  templateUrl: "./player-selection.component.html",
  styleUrls: ["./player-selection.component.css"]
})
export class PlayerSelectionComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit() {}

  pushPlayer() {
    var element = <HTMLInputElement>document.getElementById("nameInput");
    var nameInput = (<HTMLInputElement>document.getElementById("nameInput")).value;
    var playerObject = new PlayerObject(nameInput);
    this.data.addPlayer(playerObject);
    element.value = "";
  }
}
