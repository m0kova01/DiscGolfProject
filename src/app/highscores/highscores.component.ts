import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  score: number;
}

const HIGHSCORES_DATA: PeriodicElement[] = [
  {position: 1, name: "Calros", score: 61},
  {position: 2, name: "Mate", score: 64},
  {position: 3, name: "Zach", score: 62},
  {position: 4, name: "Abel", score: 67},
  {position: 5, name: "JP", score: 63},
  {position: 6, name: "Carlos", score: 67},
  {position: 7, name: "Mate", score: 75},
  {position: 8, name: "Zach", score: 23},
  {position: 9, name: "Abel", score: 620},
  {position: 10, name: "JP", score: 70},
];

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = HIGHSCORES_DATA;
  constructor() { }

  ngOnInit() {
  }

}
