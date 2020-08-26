import { Component, OnInit } from '@angular/core';
import { BandsService } from './band/services/bands.service';

@Component({
  selector: 'ni-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bands';

  constructor(private bandsService: BandsService) {
  }

  ngOnInit() {
  }

}
