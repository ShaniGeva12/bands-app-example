import { Injectable } from '@angular/core';
import { BandItem, AddBandRequest } from '../model/bands.model';
import DataJson from '../model/data.json';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  public bands: Array<BandItem> = new Array<BandItem>();
  
  constructor() { 
    if (localStorage.length > 0) {
      this.readFromLocalStorage();
    } 
    if(this.bands.length == 0) {
      this.readFromJsonObj();
    }
  }

  readFromLocalStorage(){
    let jsonObj : any;
    for(let i=0; i<localStorage.length; i++){
      jsonObj = JSON.parse(localStorage.getItem('BandItem ' + i)); 
      this.bands.push(<BandItem>jsonObj);
    }
  }

  readFromJsonObj(){
    let jsonObj: any = JSON.stringify(DataJson);
    jsonObj = JSON.parse(jsonObj); 
    this.bands = <Array<BandItem>>jsonObj; 
  }

  saveListToLocalStorage(){
    localStorage.clear();
    this.bands.forEach(item=>{
      localStorage.setItem('BandItem ' + item.id, JSON.stringify(item));
    });
  }

  addBand(band: AddBandRequest){
    let bandToAdd : BandItem = {
      id: this.bands.length,
      name: band.name,
      origin: band.origin,
      activeYears: band.activeYears,
      website: band.website,
      isDisbanding: band.isDisbanding,
      disbandingYear: band.isDisbanding? band.disbandingYear : ''
    };

    this.bands.push(bandToAdd);
    this.saveListToLocalStorage();
  }

  removeBand(bandId: number){
    let bandToRemove : BandItem = this.bands.find(elm => elm.id == bandId);

    if(bandToRemove){
      this.bands.splice(bandId, 1);

      //fixing each bandItem ID to match array
      this.bands.forEach(item=>{
        item.id = this.bands.indexOf(item);
      });
      this.saveListToLocalStorage();
    }
  }
}
