import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMobile: boolean;

  constructor(private utility: UtilityService, private data: DataService) { }

  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();
  }
}
