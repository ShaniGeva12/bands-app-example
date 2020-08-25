import { Component, OnInit } from '@angular/core';
import {BandsService} from '../../bands.service';
import {Band} from '../../band.model';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {pipe} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-bands',
  templateUrl: './show-bands.component.html',
  styleUrls: ['./show-bands.component.scss']
})
export class ShowBandsComponent implements OnInit {
  public dataSource = new MatTableDataSource<Band>();
  public displayedColumns: string[];
  constructor(private bandsService: BandsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'origin', 'years', 'website', 'disbandingYear', 'delete'];
    const bands: Band[] = [];
    this.route.snapshot.data.bands.forEach(bandBE => {
      bands.push(this.bandsService.convertBeBandToBand(bandBE));
    });
    this.dataSource.data = bands;

    ////// get data from BE (before using resolver)
    // this.bandsService.getBandsListBE().subscribe(res => {
    //   const bands: Band[] = [];
    //   res.forEach(bandBE => {
    //     bands.push(this.bandsService.convertBeBandToBand(bandBE));
    //   });
    //   this.dataSource.data = bands;
    // });
  }

  deleteBand(e: Event, id: string) {
    e.preventDefault();
    e.stopPropagation();
    this.bandsService.deleteBandBE(id).subscribe(res => {
      const index = this.dataSource.data.findIndex((band) => band.id === id);

      if (index >= 0) {
        const newData = Object.assign(this.dataSource.data);
        newData.splice(index, 1);
        this.dataSource.data = newData;
      }
    }, err => {
      // TBD: error handling;
      console.log(err);
    });

  }
}
