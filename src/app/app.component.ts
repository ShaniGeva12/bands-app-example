import {Component, OnInit} from '@angular/core';
import {BandsService} from './band/bands.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bands';
  constructor(private bandsService: BandsService) {
  }
  ngOnInit() {
    // this.bandsService.getBandsList();
  }

}
