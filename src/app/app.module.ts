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
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { GameComponent } from './game/game.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { ResultsComponent } from './results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule} from '@angular/material/expansion';
import { UtilityService } from './services/utility.service';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { WeatherService } from './services/weather.service';




@NgModule({
  declarations: [
    AppComponent,
    HighscoresComponent,
    PlayerSelectionComponent,
    HomeComponent,
    GameComponent,
    ResultsComponent,
    WeatherComponent,
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
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatStepperModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule { }

