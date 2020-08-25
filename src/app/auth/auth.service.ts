import { Injectable } from '@angular/core';
import {Config} from '../config/config';
import {HttpClient} from '@angular/common/http';
import {AuthUserBE, User} from './auth.model';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public login(user: string, pass: string): Observable<AuthUserBE[]> {
    const url = `${Config.serverDev}${Config.authApi}${user}/${pass}`;
    return this.http.get<AuthUserBE[]>(url);
  }

  public logout() {
    this.cookieService.deleteAll();
  }
  public setUser(user: AuthUserBE) {
    this.cookieService.set('userName', user.UserName);
    this.refreshToken(user.UserToken);
  }

  public getUserData(): User {
    return {
      name: this.cookieService.get('userName'),
      token: this.cookieService.get('token'),
    };
  }
  public refreshToken(token) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 10);
    this.cookieService.set('token', token, date);
  }
  public isAuthenticated(): boolean {
    const token = this.cookieService.get('token');
    this.refreshToken(token);
    if (token) {
      return true;
    }
    return false;
  }
}

