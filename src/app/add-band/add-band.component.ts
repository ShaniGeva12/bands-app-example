import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BandsService} from "../bands.service";

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {
  addBandForm = new FormGroup({
    name : new FormControl('', Validators.required),
    origin : new FormControl('', Validators.required),
    yearsActive : new FormControl('', Validators.required),
    website : new FormControl('', Validators.required)
  });


  constructor(private bandsService : BandsService) { }

  ngOnInit() {
  }

  onAdd() {
    this.bandsService.addBand(this.addBandForm.value);
  }

}
