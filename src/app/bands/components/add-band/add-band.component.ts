import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AddBandRequest } from '../../model/bands.model';
import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss']
})
export class AddBandComponent implements OnInit {

  bandForm: FormGroup;

  subs: SubSink = new SubSink();
  
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
  
  constructor(
    private bandsService: BandsService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.setForm();

    this.subs.sink = this.bandForm.controls.isDisbanding.valueChanges.subscribe(val=>{
      if(val){
        this.bandForm.controls.disbandingYear.setValidators(Validators.required);
      }
      else{
        this.bandForm.controls.disbandingYear.clearValidators();
      }
      this.bandForm.controls.disbandingYear.updateValueAndValidity();
    });
  }

  setForm(){
    this.bandForm = this.fb.group({
      name: [ null,
        Validators.required
      ],
      origin: [ null,
        Validators.required
      ],
      activeYears: [ null,
        Validators.required
      ],
      website:  [ null,
        Validators.required
      ],
      isDisbanding:  [ null ],
      disbandingYear:  [ null ]
    });
  }

  onSubmit(){
    this.bandsService.addBand(<AddBandRequest>this.bandForm.value);
    this.navigateToBands();
  }

  navigateToBands(){
    this.router.navigate(['/show-bands']);
  }

}
