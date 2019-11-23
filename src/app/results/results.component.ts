import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  amountOfPlayers: number[];
  names: string[];
  totalScore: number[];

  constructor(private data: DataService) {
    this.amountOfPlayers = [];
    this.names = [];
    this.totalScore = [];
    for (var i = 0; i < this.data.playerCount(); i++) {
      this.amountOfPlayers.push(i);
      this.names[i] = this.data.returnIndexName(i);
      this.totalScore[i] = this.data.returnEachPlayerScore(i);
    }
  }

  ngOnInit() {}
}
