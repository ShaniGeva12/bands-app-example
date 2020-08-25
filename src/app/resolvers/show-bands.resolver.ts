import {BandBE} from '../band/band.model';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BandsService} from '../band/bands.service';

@Injectable({ providedIn: 'root' })
export class ShowBandsResolver implements Resolve<BandBE[]> {
  constructor(private service: BandsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getBandsListBE();
  }
}
