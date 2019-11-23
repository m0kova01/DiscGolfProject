import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayerSelectionComponent } from "./player-selection/player-selection.component";
import { AppComponent } from "./app.component";
import { HighscoresComponent } from "./highscores/highscores.component";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  { path: "highscores", component: HighscoresComponent },
  { path: "player-selection", component: PlayerSelectionComponent },
  { path: "home", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "game",
    component: GameComponent
  },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
