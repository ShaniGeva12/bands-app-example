import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Band} from "../band.model";
import {BandService} from "../band.service";

@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})
export class BandsTableComponent implements OnInit, OnDestroy{
  bands: Band[];
  displayedColumns: string[] = ['name', 'origin', 'yearsActive', 'website'];
  bandSubscription: Subscription;
  constructor(private bandsService: BandService) { }

  ngOnInit() {
    this.bands = this.bandsService.getBands();
    this.bandSubscription = this.bandsService.bandChanged.subscribe( bands => {
      this.bands = bands;
    })
  }

  ngOnDestroy() {
    this.bandSubscription.unsubscribe();
  }

}
