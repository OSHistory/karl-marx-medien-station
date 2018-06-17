import { Component, OnInit, AfterContentInit } from '@angular/core';

import { Location } from '@angular/common';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from './services/data.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  navTiles: string[] = ["Foo", "BAR", "Baz", "foobar"];
  isoCode: string = 'de';

  constructor(
    private dataService: DataService,
    private languageService: LanguageService,
    private _location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.isoCode = this.languageService.getIsoCode();
  }

  changeLanguage(lang: string) {
    this.languageService.setIsoCode(lang);
    this.isoCode = lang;
  }
}
