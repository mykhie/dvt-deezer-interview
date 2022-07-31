import {fakeAsync, inject, TestBed} from '@angular/core/testing';

import {ArtistService} from './artist.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('ArtistService', () => {
  let service: ArtistService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ArtistService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call get search of artists', inject([ArtistService], fakeAsync((service: ArtistService)=> {
    let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem';
    service.getSearchResults('s').subscribe((res) => {

    });
  })))
  it('Should contain deezer url', () => {
    expect(service.deezerUrl).toEqual('https://cors-anywhere.herokuapp.com/https://api.deezer.com');
  });
});
