import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BandsComponent } from './bands/bands.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddBandComponent } from './bands/components/add-band/add-band.component';
import { BandPageComponent } from './bands/components/band-page/band-page.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    HeaderComponent,
    WelcomeComponent,
    AddBandComponent,
    BandPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
