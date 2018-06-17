import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { letters } from '../vars/letters';
import { biographies } from '../vars/biographies';
import { bioSelection } from '../vars/biographies-selection';
import { sources } from '../vars/sources';
import { cities } from '../vars/city-portrait';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  letters: any[] = letters;
  sources: any[] = sources;
  cities: any[] = cities;
  biographies: any[] = biographies;

  bioSelection: any[] = bioSelection;
  bioDict: any = {};

  constructor(
    private http: HttpClient
  ) {
    this.biographies.forEach((biography) => {
      this.bioDict[biography["slug"]] = biography;
    });
  }

  hasSources() : boolean {
    return this.sources.length > 0;
  }

  hasBiographies() :boolean {
    return this.bioSelection[0].bios.length > 0;
  }

  hasEnglishLetters() :boolean {
    let hasLetters: boolean = false;
    this.letters.forEach((letterGroup: any) => {
      if (letterGroup.has_en) {
        hasLetters = true;
      }
    });
    return hasLetters;
  }

  getBioInfo(bioId: string) : any {
    return this.bioDict[bioId];
  }

  getBioGroupOverview(isoCode: string) : any[] {
    let bioGroupOverview: any[] = [];
    this.bioSelection.forEach((bioGroup: any) => {
      bioGroupOverview.push({
        "name": bioGroup.city_name,
        "slug": bioGroup.city_slug
      });

    });
    return bioGroupOverview;
  }

  getBioGroupForSlug(bioSlug: string) :string {
    let bioGroupOverview: any[] = [];
    let bioGroupString: string;
    this.bioSelection.forEach((bioGroup: any) => {
      let matchedBiography = bioGroup.bios.find((biography: any) => {
        return biography.slug === bioSlug;
      });
      if (matchedBiography !== undefined) {
        bioGroupString = bioGroup.city_slug;
        return;
      }
    });
    return bioGroupString;
  }

  getCityGroupOverview(isoCode: string): any[] {
    let cityGroupOverview: any[] = [];
    this.cities.forEach((city: any) => {
      cityGroupOverview.push({
        "name": city.name,
        "slug": city.slug
      });
    })
    return cityGroupOverview;
  }

  getCityInfo(citySlug): any {
    let city = this.cities.find((city: any) => {
      return city.slug === citySlug;
    });
    return city;
  }

  getLetterOverview(isoCode: string): any[] {
    let letterOverview: any[] = [];

    this.letters.forEach((letterGroup: any) => {
      if (isoCode === 'en' && letterGroup.has_en) {
        letterOverview.push({
          "slug": letterGroup["slug"],
          "name": letterGroup["name"][isoCode],
          "has_en": letterGroup["has_en"]
         });
      } else {
        letterOverview.push({
          "slug": letterGroup["slug"],
          "name": letterGroup["name"][isoCode],
          "has_en": letterGroup["has_en"]
        });
      }
    })
    return letterOverview;
  }

  letterGroupHasEn(letterGroupSlug: string) :boolean {
    let letterGroup = this.letters.find((letterGroupItem) => {
      return letterGroupItem.slug === letterGroupSlug;
    });
    return letterGroup.has_en;
  }

  public personHasLetters(bioId: string):boolean {
    let result = this.letters.find((letterGroup) => {
      return letterGroup.slug === bioId;
    });
    if (result === undefined) {
      return false;
    } else {
      return true;
    }
  }

  getLettersForGroup(letterGroupSlug: string) {
    let letterGroup = this.letters.find((letterGroupItem) => {
      return letterGroupItem.slug === letterGroupSlug;
    });
    return letterGroup.letters;
  }

  public getPersonsForGroup(bioGroupSlug: string) : any[] {
    let bioGroup = this.bioSelection.find((bioGroup: any) => {
      return bioGroup.city_slug === bioGroupSlug;
    });
    return bioGroup.bios;
  }

}
