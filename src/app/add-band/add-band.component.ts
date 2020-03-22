import { Component, OnInit } from '@angular/core';
import {Band} from "../band.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {

  bands: Band[] = [];
  paramsSubscription = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe();
  }

  onAddItem(band: Band) {
    this.bands.push(band);
  }
}
