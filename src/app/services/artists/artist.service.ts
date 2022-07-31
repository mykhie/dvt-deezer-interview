import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";
import {BehaviorSubject, catchError, map, Observable, Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtistService extends HttpService {

  deezerUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

  searchString: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(injector: Injector) {
    super(injector)
  }

  getSearchResults(search: string, index = 0): any {
    return this.httpClient.get(`${this.deezerUrl}/search?q=${search}&index=${index}`)
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

  getArtistAlbums(id): any {
    return this.httpClient.get(`${this.deezerUrl}/artist/${id}/albums`)
      .pipe(map(res => {
        return res;
      }))
      .pipe(
        catchError(error => {
          return throwError(() => this.handleError(error));
        })
      );
  }

  getArtistTacks(id): any {
    return this.httpClient.get(`${this.deezerUrl}/artist/${id}/top`)
      .pipe(map(res => {
        return res;
      }))
      .pipe(
        catchError(error => {
          return throwError(() => this.handleError(error));
        })
      );
  }

  returnSearchValue() {
    this.searchString.value;
  }

  sendSearchToArtists(search: string) {

    this.searchString.next(search);
  }
}
