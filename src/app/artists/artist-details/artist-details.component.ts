import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArtistService} from "../../services/artists/artist.service";
import {forkJoin, map, mergeMap} from "rxjs";
import {Utils} from "../../utils/Utils";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  artist: any = undefined;
  tracks: Array<any> = [];
  albums: Array<any> = [];
  error: string = '';
  isLoading = false;
  isLoadingTracks: boolean = false;

  constructor(public artistService: ArtistService, public router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getArtistDetails();
  }


  getArtistDetails() {
    let artistId = this.router.snapshot.paramMap.get('id');
    if (!artistId) {
      this.error = 'Invalid URL';
      return;
    }

    this.isLoading = true;
    this.isLoadingTracks = true;

    this.artistService.getArtistDetails(artistId)
      .pipe(map(artist => {
          this.isLoading = false;
          this.artist = artist;
          return artist;
        }),
        mergeMap(() => {
          const tracks = this.artistService.getArtistTacks(artistId);
          const albums = this.artistService.getArtistAlbums(artistId);
          return forkJoin([tracks, albums])
        }))
      .subscribe(res => {
        this.isLoadingTracks = false;
        this.tracks = res[0]?.data;
        this.albums = res[1]?.data;
      }, error => {
        this.isLoading = false;
        this.isLoadingTracks = false;
        this.error = error.message;
      })
  }

  returnShortNumberString(number) {
    return Utils.shortNumber(number);
  }
  dateYear(date) {
    return Utils.dateYear(date);
  }
}
