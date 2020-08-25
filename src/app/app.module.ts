import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddBandComponent } from './components/add-band/add-band.component';
import { ShowBandsComponent } from './components/show-bands/show-bands.component';
import { MainTemplateComponent } from './templates/main-template/main-template.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BandViewComponent } from './components/band-view/band-view.component'
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBandComponent,
    ShowBandsComponent,
    MainTemplateComponent,
    BandViewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatTableModule,
        NoopAnimationsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
