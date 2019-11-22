import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HighscoresComponent } from './highscores/highscores.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule, MatDialogTitle} from '@angular/material/dialog';
import {MatInputModule, MatInput} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HighscoresComponent,
    PlayerSelectionComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

