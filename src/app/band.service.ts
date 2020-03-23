import {Injectable} from "@angular/core";
import {Band} from "./band.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BandService {
  bands: Band[];
  bandChanged = new Subject<Band[]>();
  localStorageKey = 'appBands';

  constructor() {
    this.bands = JSON.parse(localStorage.getItem(this.localStorageKey)) || [];
  }

  getBands() {
    return this.bands.slice();
  }

  addBand(band: Band) {
    this.bands.push(band);
    this.bandChanged.next(this.bands.slice());
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.bands));
  }

  deleteBand(index: number) {
    let localStorageBands = JSON.parse(localStorage.getItem(this.localStorageKey));
    localStorageBands.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(localStorageBands));
    this.bands.splice(index, 1);
    this.bandChanged.next(this.bands.slice());
  }

  getBand(id: number) {
    let appBands = JSON.parse(localStorage.getItem(this.localStorageKey));
    if (appBands.length < id) {
      return null;
    }
    return appBands[id - 1];
  }
}
