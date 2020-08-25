import { Injectable } from '@angular/core';
import {Band, BandBE} from './band.model';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BandsService {
  // private bands = new Map<string, Band>();
  // public bandsObservableArray = new BehaviorSubject<Band[]>([]);
  constructor(private http: HttpClient) { }

  public addBandBE(band: BandBE): Observable<BandBE> {
    const url = Config.serverDev + Config.bandsApi;
    return this.http.post<BandBE>(url, band);
  }
  public getBandByIdBE(id: string): Observable<BandBE> {
      const url = `${Config.serverDev}${Config.bandsApi}${id}`;
      return this.http.get<BandBE>(url);
  }
  public getBandsListBE(): Observable<BandBE[]> {
    const url = Config.serverDev + Config.bandsApi;
    return this.http.get<BandBE[]>(url);
  }
  public deleteBandBE(id: string) {
    const url = `${Config.serverDev}${Config.bandsApi}${id}`;
    return this.http.delete(url);
  }
  public convertBeBandToBand(band: BandBE): Band {
    return {
      id: band.id,
      disbandingYear: band.BandDisbandingYear,
      name: band.BandName,
      origin: band.BandOrigin,
      website: band.BandWebsite,
      years: band.BandYears,
    };
  }

  // public deleteBand(id: string) {
  //   this.bands.delete(id);
  //   this.saveData();
  // }
  // public getLocalData() {
  //   if (localStorage.getItem('bands')) {
  //     const tempBandsArray: Band[] = JSON.parse(localStorage.getItem('bands'));
  //     this.bandsObservableArray.next(tempBandsArray);
  //     tempBandsArray.map(band => {
  //       this.bands.set(band.id, band);
  //     });
  //   }
  // }

  // public getBands(): Band[] {
  //   const bandsArray: Band[] = [];
  //   this.bands.forEach((val, key) => {
  //     bandsArray.push(val);
  //   });
  //   return bandsArray;
  // }
  // public getBandById(id: string) {
  //   return this.bands.get(id);
  // }
  // public addBand(band) {
  //   const url = Config.serverDev + Config.apiPath;
  //   this.saveData();
  // }
  // private saveData() {
  //   const bandsArray: Band[] = [];
  //   this.bands.forEach((val, key) => {
  //     bandsArray.push(val);
  //   });
  //   this.bandsObservableArray.next(bandsArray);
  //   localStorage.setItem('bands', JSON.stringify(bandsArray));
  // }
}
