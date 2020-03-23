import { Component, OnInit } from '@angular/core';
import {BandService} from "../band.service";

@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})
export class BandsTableComponent implements OnInit {

  constructor(private bandService: BandService) { }

  ngOnInit() {
  }

  getBands() {
    return this.bandService.getBands();
  }

}
