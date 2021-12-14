import { Injectable } from '@angular/core';
import { BandItem, AddBandRequest } from '../model/bands.model';
import DataJson from '../model/data.json';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  public bands: Array<BandItem> = new Array<BandItem>();
  
  constructor() { 
    let jsonObj: any = JSON.stringify(DataJson);
    jsonObj = JSON.parse(jsonObj); 
    this.bands = <Array<BandItem>>jsonObj; 
  }

  addBand(band: AddBandRequest){
    let bandToAdd : BandItem = {
      id: this.bands.length,
      name: band.name,
      origin: band.origin,
      activeYears: band.activeYears,
      website: band.website,
      isDisbanding: band.isDisbanding
    };

    this.bands.push(bandToAdd);
  }
}
