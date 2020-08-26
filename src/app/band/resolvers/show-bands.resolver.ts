import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BandsService } from '../services/bands.service';
import { BandResponse } from '../models/bandResponse.model';

@Injectable({ providedIn: 'root' })
export class ShowBandsResolver implements Resolve<BandResponse[]> {
  constructor(private service: BandsService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> | Promise<any> | any {
    return this.service.getBandsListBE();
  }
}
