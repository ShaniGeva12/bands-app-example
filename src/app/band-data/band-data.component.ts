import { Component, OnInit } from '@angular/core';
import {Band} from "../band.model";
import {BandService} from "../band.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-band-data',
  templateUrl: './band-data.component.html',
  styleUrls: ['./band-data.component.scss']
})
export class BandDataComponent implements OnInit {
  band: Band = null;
  id: number;

  constructor(private bandService: BandService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>
        this.id = +params.id
    );
    this.band = this.bandService.getBand(this.id);
  }
}
