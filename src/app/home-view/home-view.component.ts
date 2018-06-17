import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  isoCode: string;
  hasSources: boolean;
  hasBiographies: boolean;
  hasEnglishLetters: boolean;

  cityOverviews: any[];
  cityPortrait: any = {
        name: {
          'de': "Stadtportrait",
          'en': "City Portrait"
        },
        namePlural: {
          'de': "Stadtportraits",
          'en': "City Portraits"
        },
        link: "/cityportrait"
      };
  biographies: any =     {
        name: {
          "en": "Biographies",
          "de": "Biographien"
        },
        link: "/biographies"
      };

  letters: any = {
    name: {
      "de": "Briefe",
      "en": "Letters"
    },
    link: "/letters"
  };

  sources: any = {
    name: {
      "de": "Archivalien",
      "en": "Archive"
    },
    link: "/sources"
  }

  constructor(
    private dataService: DataService,
    private languageService: LanguageService
  ) {
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });
    this.hasSources = this.dataService.hasSources();
    this.hasBiographies = this.dataService.hasBiographies();
    this.hasEnglishLetters = this.dataService.hasEnglishLetters();
  }


  ngOnInit() {
    this.isoCode = this.languageService.getIsoCode();
    let letterOverviews = this.dataService.getLetterOverview('de');
    if (letterOverviews.length === 1) {
      this.letters.link += '/' + letterOverviews[0].slug;
    }

    let bioOverviews = this.dataService.getBioGroupOverview('de');
    if (bioOverviews.length === 1) {
      this.biographies.link += '/' + bioOverviews[0].slug;
    }

    this.cityOverviews = this.dataService.getCityGroupOverview('de');
    if (this.cityOverviews.length === 1) {
      this.cityPortrait.link += '/' + this.cityOverviews[0].slug;
    }
  }

}
