import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowBandsComponent} from './components/show-bands/show-bands.component';
import {AddBandComponent} from './components/add-band/add-band.component';
import {MainTemplateComponent} from '../shared/templates/main-template/main-template.component';
import {BandViewComponent} from './components/band-view/band-view.component';
import {ShowBandsResolver} from '../resolvers/show-bands.resolver';
import {AuthGuardService} from '../guards/auth-guard.service';


const routes: Routes = [
  {
    path: 'show-bands',
    canActivate: [AuthGuardService],
    component: MainTemplateComponent,
    resolve: {
      bands: ShowBandsResolver,
    },
    children: [
      { path: '', component: ShowBandsComponent },
    ]
  },
  {
    path: 'add-band',
    canActivate: [AuthGuardService],
    component: MainTemplateComponent,
    children: [
      { path: '', component: AddBandComponent },
    ]
  },
  {
    path: 'band-details/:id',
    canActivate: [AuthGuardService],
    component: MainTemplateComponent,
    children: [
      { path: '', component: BandViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BandsRoute { }
