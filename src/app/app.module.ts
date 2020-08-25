import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BandsRoute } from './band/bands.route';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AddBandComponent } from './band/components/add-band/add-band.component';
import { ShowBandsComponent } from './band/components/show-bands/show-bands.component';
import { MainTemplateComponent } from './shared/templates/main-template/main-template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BandViewComponent } from './band/components/band-view/band-view.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './auth/components/login/login.component';
import {LoginRoute} from './auth/auth.route';
import {AppRoutingModule} from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {CookieService} from 'ngx-cookie-service';
import {ClickOutsideModule} from 'ng-click-outside';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBandComponent,
    ShowBandsComponent,
    MainTemplateComponent,
    BandViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BandsRoute,
    LoginRoute,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    ClickOutsideModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
