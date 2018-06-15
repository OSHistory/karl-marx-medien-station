import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';

// import { bioSelection } from '../vars/biographies-selection';

@Component({
  selector: 'app-biography-overview',
  templateUrl: './biography-overview.component.html',
  styleUrls: ['./biography-overview.component.scss']
})
export class BiographyOverviewComponent implements OnInit {

  persons: string[];
  isoCode: string;
  bioGroupId: string;
  // personBios: any[];
  // bioSelection: any[] = bioSelection;

  constructor(
    private dataService: DataService,
    private languageService: LanguageService,
    private route: ActivatedRoute
  ) {

    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });

    // if (this.bioSelection.length === 1) {
    //   this.persons = this.bioSelection[0]["bios"];
    // }
  }

  ngOnInit() {
    this.bioGroupId = this.route.snapshot.paramMap.get("biogroupid");
    this.persons =     this.dataService.getPersonsForGroup(this.bioGroupId); 
    console.log(this.bioGroupId);
  }

}
