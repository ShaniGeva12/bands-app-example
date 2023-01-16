import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SubSink } from 'subsink';
import { BandItem } from './model/bands.model';
import { BandsService } from './services/bands.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  displayedColumns: string[] = ['id', 'name', 'origin', 'activeYears', 'website', 'disbandingYear', 'actions'];
  dataSource = new MatTableDataSource<BandItem>();

  subs: SubSink = new SubSink();

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  constructor(
    private bandsService: BandsService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.subs.sink = this.bandsService.bands$.subscribe((bands : BandItem[])=>{
      this.dataSource.data = bands;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  rowClicked(row: BandItem){
    this.navigateToBandPage(row.id);
  }

  navigateToBandPage(bandId: number){
    this.router.navigate(['/band-details', bandId]);
  }

  removeBand(bandId: number){
    this.bandsService.removeBand(bandId);
  }
}
