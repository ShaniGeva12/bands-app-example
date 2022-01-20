import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BandItem, AddBandRequest } from '../model/bands.model';

@Injectable({
  providedIn: 'root'
})
export class BandsService {
  private readonly BandsServiceUrl = 'http://localhost:3000/bands';

  private _bands$: BehaviorSubject<BandItem[]> = new BehaviorSubject([]);
  public bands$: Observable<BandItem[]> = this._bands$.asObservable();

  constructor(private http: HttpClient) { 
    this.refreshBandsList();
  }

  private refreshBandsList(){
    this.getBands().subscribe(res => {
      this._bands$.next(res);
    });
  }

  private getBands() {
    return this.http.get<Array<BandItem>>(this.BandsServiceUrl)
    .pipe(
      catchError(err => this.handleError(err, 'getBands'))
    );
  }

  private postBand(band :AddBandRequest){
    return this.http.post<BandItem>(this.BandsServiceUrl, band)
    .pipe(
      catchError(err => this.handleError(err, 'postBand', band))
    );
  }

  private deleteBand(id: number): Observable<unknown> {
    const url = this.BandsServiceUrl + '/' + id;
    return this.http.delete(url)
      .pipe(
        catchError(err => this.handleError(err, 'deleteBand', id))
      );
  }

  private handleError(error: HttpErrorResponse, methodName? : string, obj? : any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something went wrong, please try again later.' + methodName + ' ' + obj);
  }

  addBand(band: AddBandRequest) {
    this.postBand(band)
      .pipe(
        tap(() => this.refreshBandsList()),
        catchError(err => 
        this.handleError(err, 'addBand', 'AddBandRequest: ' + band)
      ))
    .subscribe();
  }

  removeBand(bandId: number) {
    this.deleteBand(bandId)
      .pipe(
        tap(() => this.refreshBandsList()),
        catchError(err => 
          this.handleError(err, 'removeBand', 'bandId: ' + bandId)
      ))
    .subscribe();
  }

}
