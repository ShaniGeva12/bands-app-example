import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Band, BandBE} from '../../band.model';
import {BandsService} from '../../bands.service';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.scss']
})
export class BandViewComponent implements OnInit {
  public bandId: string;
  public band: Band;

  constructor(private bandsService: BandsService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.bandId = params.id;
        this.bandsService.getBandByIdBE(this.bandId).subscribe((bandBE: BandBE) => {
          this.band = this.bandsService.convertBeBandToBand(bandBE);
        });
      }
      // TBD: error handling
    });
  }

}
