import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-letters-display',
  templateUrl: './letters-display.component.html',
  styleUrls: ['./letters-display.component.scss']
})
export class LettersDisplayComponent implements OnInit {

  @ViewChild('letterContainer')
  letterContainer: ElementRef;

  letters: any;
  isoCode: string;
  baseUrl: string;
  hasEn: boolean;
  bioInfo: any;
  bioGroupId: string;


  constructor(
    private dataService: DataService,
    private el: ElementRef,
    private languageService: LanguageService,
    private _location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isoCode = this.languageService.getIsoCode();
    this.languageService.languageChange$.subscribe((isoCode) => {
      this.isoCode = isoCode;
    });
    let groupId = this.route.snapshot.paramMap.get('lettergroup');
    this.baseUrl = this.router.url.split("#")[0];
    this.hasEn = this.dataService.letterGroupHasEn(groupId);
    this.letters = this.dataService.getLettersForGroup(groupId);
    this.bioInfo = this.dataService.getBioInfo(groupId);
    if (this.bioInfo !== undefined) {
      this.bioGroupId = this.dataService.getBioGroupForSlug(this.bioInfo.slug);
    }
  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  public scrollTo(idx: number) {
    let letterElement = document.getElementById('letter' + idx);
    let el: HTMLElement = this.letterContainer.nativeElement;
    // Display is 1080 - 150 = 930 so scroll into view
    // only if height greater
    let scrollHeight = el.scrollHeight;
    if (scrollHeight > 930) {
      letterElement.scrollIntoView();
    }
  }

}
