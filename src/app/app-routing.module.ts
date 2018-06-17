import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiographyOverviewComponent } from './biography-overview/biography-overview.component';
import { CityPortraitComponent } from './city-portrait/city-portrait.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { LettersOverviewComponent } from './letters-overview/letters-overview.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { SourcesOverviewComponent } from './sources-overview/sources-overview.component';
import { LettersDisplayComponent } from './letters-display/letters-display.component';
import { CityPortraitOverviewComponent } from './city-portrait-overview/city-portrait-overview.component';
import { BiographyGroupOverviewComponent } from './biography-group-overview/biography-group-overview.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'biographies',
    component: BiographyGroupOverviewComponent
  },
  {
    path: 'biographies/:biogroupid',
    component: BiographyOverviewComponent
  },
  {
    path: 'biographies/:biogroupid/:bioid',
    component: PersonDetailComponent
  },
  {
    path: 'letters',
    component: LettersOverviewComponent
  },
  {
    path: 'letters/:lettergroup',
    component: LettersDisplayComponent
  },
  {
    path: 'cityportrait',
    component: CityPortraitOverviewComponent
  },
  {
    path: 'cityportrait/:cityid',
    component: CityPortraitComponent
  },
  {
    path: 'sources',
    component: SourcesOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
