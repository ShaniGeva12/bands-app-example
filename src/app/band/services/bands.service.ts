import { Injectable } from '@angular/core';
import { Band } from '../models/band.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config/config';
import { BandResponse } from '../models/bandResponse.model';

@Injectable({
  providedIn: 'root',
})
export class BandsService {
  constructor(private http: HttpClient) {
  }

  public addBandBE(band: BandResponse): Observable<BandResponse> {
    const url = Config.serverDev + Config.bandsApi;
    return this.http.post<BandResponse>(url, band);
  }

  public getBandByIdBE(id: string): Observable<BandResponse> {
    const url = `${Config.serverDev}${Config.bandsApi}${id}`;
    return this.http.get<BandResponse>(url);
  }

  public getBandsListBE(): Observable<BandResponse[]> {
    const url = Config.serverDev + Config.bandsApi;
    return this.http.get<BandResponse[]>(url);
  }

  public deleteBandBE(id: string) {
    const url = `${Config.serverDev}${Config.bandsApi}${id}`;
    return this.http.delete(url);
  }

  public convertBeBandToBand(band: BandResponse): Band {
    return {
      id: band.id,
      disbandingYear: band.BandDisbandingYear,
      name: band.BandName,
      origin: band.BandOrigin,
      website: band.BandWebsite,
      years: band.BandYears,
    };
  }
}
