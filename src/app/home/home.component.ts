import { Component, OnInit } from "@angular/core";
import { UtilityService } from '../services/utility.service';
import { DataService } from '../services/data.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private utility: UtilityService, private data: DataService) {}
  isMobile: boolean;
  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();
  }
}
