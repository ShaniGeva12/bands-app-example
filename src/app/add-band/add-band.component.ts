import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BandService} from "../band.service";

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {
  addBandForm = new FormGroup({
    name: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    yearsActive: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    disbandingYear: new FormControl(null)
  });

  constructor(private bandService : BandService) { }

  ngOnInit() {
  }

  onAdd() {
    this.bandService.addBand(this.addBandForm.value);
  }
}
