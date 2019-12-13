import { Component } from "@angular/core";
import { UtilityService } from './services/utility.service';
import { DataService } from './services/data.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "disc-golf-project";
  isMobile: boolean;
  showHome: boolean;
  constructor(private utility: UtilityService, private data: DataService) {
    this.showHome = true;
  }
  
  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();
  }
  hideHome() {
    this.showHome = false;
  }
}