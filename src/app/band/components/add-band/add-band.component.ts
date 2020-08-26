import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BandsService } from '../../services/bands.service';
import { BandResponse } from '../../models/bandResponse.model';

@Component({
  selector: 'ni-app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss'],
})
export class AddBandComponent implements OnInit {
  private addBandForm: FormGroup;
  private submitted = false;

  constructor(private bandsService: BandsService) {
  }

  ngOnInit() {
    const urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.addBandForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
      'years-active': new FormControl(''),
      website: new FormControl('', [Validators.required, Validators.pattern(urlReg)]),
      disbanding: new FormControl(false),
    });
  }

  showError(fieldName: string) {
    const errorString: string[] = [];
    if (this.submitted && this.addBandForm.controls[fieldName].errors && this.addBandForm.controls[fieldName].errors.required) {
      errorString.push('This field is required');
    }
    if (this.submitted && this.addBandForm.controls[fieldName].errors && this.addBandForm.controls[fieldName].errors.pattern) {
      errorString.push('Wrong format');
    }
    return errorString.join(', ');
  }

  disbandingChange(e) {
    if (this.addBandForm.controls.disbanding.value) {
      this.addBandForm.addControl('disbandingYear', new FormControl('', [Validators.required]));
    } else {
      this.addBandForm.removeControl('disbandingYear');
    }
  }

  submit() {
    this.submitted = true;
    if (this.addBandForm.valid) {
      const newBand: BandResponse = {
        id: null,
        BandName: this.addBandForm.controls.name.value,
        BandOrigin: this.addBandForm.controls.origin.value,
        BandYears: this.addBandForm.controls['years-active'].value,
        BandWebsite: this.addBandForm.controls.website.value,
        BandDisbandingYear: this.addBandForm.controls.disbandingYear ? this.addBandForm.controls.disbandingYear.value : null,
      };
      this.bandsService.addBandBE(newBand).subscribe((band: BandResponse) => {
        console.log(band);
      });
    }
  }
}
