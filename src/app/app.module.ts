import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBandComponent } from './add-band/add-band.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BandService} from "./band.service";
import { HomeComponent } from './home/home.component';
import {BandsTableComponent} from "./bands-table/bands-table.component";
import { BandDataComponent } from './band-data/band-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBandComponent,
    HomeComponent,
    BandsTableComponent,
    BandDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
