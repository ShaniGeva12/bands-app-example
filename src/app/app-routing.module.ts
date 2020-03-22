import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBandComponent} from "./add-band/add-band.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddBandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
