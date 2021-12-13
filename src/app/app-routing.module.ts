import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandsComponent } from './bands/bands.component';
import { AddBandComponent } from './bands/components/add-band/add-band.component';
import { BandPageComponent } from './bands/components/band-page/band-page.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { 
    path:'', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'add-band',
    component: AddBandComponent
  },
  {
    path: 'show-bands',
    component: BandsComponent,
  },
  {
    path: 'band-details', 
    redirectTo: 'band-details/0'
  },
  {
    path: 'band-details/:id', 
    component: BandPageComponent,
  },
  { 
    path:'**', redirectTo: 'welcome', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
