import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandDataComponent } from './band-data.component';

describe('BandDataComponent', () => {
  let component: BandDataComponent;
  let fixture: ComponentFixture<BandDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
