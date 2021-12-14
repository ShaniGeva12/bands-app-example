import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Router } from '@angular/router';
import { BandItem } from './model/bands.model';
import { BandsService } from './services/bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  displayedColumns: string[] = ['id', 'name', 'origin', 'activeYears', 'website', 'disbandingYear', 'actions'];
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

  removeBand(bandId: number){
    this.bandsService.removeBand(bandId);
    this.dataSource = this.bandsService.bands;
    this.table.renderRows();
  }
}
