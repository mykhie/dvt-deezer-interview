import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtistService extends HttpService {

  deezerUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

  constructor(injector: Injector) {
    super(injector)
  }

  getSearchResults(search: string): any {
    return this.httpClient.get(`${this.deezerUrl}/search?q=eminen`)
      .pipe(map(res => {
        return res;
      }))
      .pipe(
        catchError(error => {
          return throwError(() => this.handleError(error));
        })
      );
  }

  getArtistDetails(id): any {
    return this.httpClient.get(`${this.deezerUrl}/artist/${id}`)
      .pipe(map(res => {
        return res;
      }))
      .pipe(
        catchError(error => {
          return throwError(() => this.handleError(error));
        })
      );
  }
}
