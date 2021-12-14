import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandItem } from './model/bands.model';
import { BandsService } from './services/bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'origin', 'activeYears', 'website', 'disbandingYear'];
  dataSource: Array<BandItem> = new Array<BandItem>();

  constructor(
    private bandsService: BandsService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.dataSource = this.bandsService.bands;
  }

  rowClicked(row: BandItem){
    this.navigateToBandPage(row.id);
  }

  navigateToBandPage(bandId: number){
    this.router.navigate(['/band-details', bandId]);
  }
}
