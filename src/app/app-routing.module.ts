import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { AppComponent } from './app.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { HomeComponent} from './home/home.component'

const routes: Routes = [
  {path: 'highscores', component: HighscoresComponent},
  {path: 'player-selection', component: PlayerSelectionComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
