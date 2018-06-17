import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-city-portrait-overview',
  templateUrl: './city-portrait-overview.component.html',
  styleUrls: ['./city-portrait-overview.component.scss']
})
export class CityPortraitOverviewComponent implements OnInit {

  cityGroupOverview: any[];
  colNum: number = 5;
  
  constructor(
    private dataService: DataService
  ) {
    this.cityGroupOverview = this.dataService.getCityGroupOverview('de');
  }

  ngOnInit() {
    if (this.cityGroupOverview.length < this.colNum) {
      this.colNum = this.cityGroupOverview.length;
    }
  }

}
