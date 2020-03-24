import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBandComponent } from './add-band/add-band.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BandsService} from "./bands.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBandComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
