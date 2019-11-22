import { Component, OnInit, Input } from "@angular/core";
import { PlayerSelectionComponent } from "../player-selection/player-selection.component";
import { PlayerObject } from "../app.component";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  // playersArr: PlayerObject[];
  constructor() {}

  ngOnInit() {
    // this.playersArr = 
  }
}
