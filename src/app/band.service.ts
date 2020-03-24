import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Band} from "./band.model";

@Injectable({
  providedIn: 'root'
})
export class BandService {

  bands : Band[];

  constructor() {
    let localStoreBands = localStorage.getItem('bands');
    if (localStoreBands == null) {
      this.bands = []
    } else {
      this.bands = JSON.parse(localStoreBands);
    }
  }

  getBands(): Observable<Band[]> {
    return of<Band[]>(this.bands);
  }

  getColumns(): string[] {
    return ["name", "origin", "yearsActive", "website", "disbandingYear"]
  };

  addBand(band: Band) {
    this.bands.push(band);
    localStorage.setItem('bands', JSON.stringify(this.bands));
  }
}
