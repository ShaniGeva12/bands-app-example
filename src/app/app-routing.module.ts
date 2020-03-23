import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBandComponent} from "./add-band/add-band.component";
import {HomeComponent} from "./home/home.component";
import {BandsTableComponent} from "./bands-table/bands-table.component";
import {BandDataComponent} from "./band-data/band-data.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-band', component: AddBandComponent},
  {path: 'bands', component: BandsTableComponent},
  {path: ':id', component: BandDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
