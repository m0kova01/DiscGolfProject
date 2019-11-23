import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { PlayerObject } from "../app.component";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  playerAndID: PlayerAndIndex[];

  constructor(private data: DataService) {
    this.playerAndID = [];
  }

  ngOnInit() {
    for (var i = 0; i < this.data.playerCount(); i++) {
      this.playerAndID.push(new PlayerAndIndex(this.data.returnIndexName(i), i));
    }
  }
  addScoresToArray() {
    for(var i = 0; i<this.playerAndID.length; i++)
    {
      var scores: number[] = [];
      var nameInput = document.getElementsByClassName("{{i}}"); //could be problem
      for(var j = 0; j < nameInput.length; j++)
      {
        scores.push(parseInt(nameInput[j].nodeValue))
      }
      this.data.addToScores(scores, this.playerAndID[i].index)
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

