import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandItem } from '../../model/bands.model';
import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-band-page',
  templateUrl: './band-page.component.html',
  styleUrls: ['./band-page.component.scss']
})
export class BandPageComponent implements OnInit {

  @Input() bandId: number;
  @Input() band: BandItem ;
  
  constructor(
    private bandsService: BandsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bandId = +(this.route.snapshot.paramMap.get('id'));
    this.band = this.bandsService.bands[this.bandId];
  }

  navigateToBandsPage(){
    this.router.navigate(['/show-bands']);
  }

}
