import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArtistService} from "../../services/artists/artist.service";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  artist: any = undefined;
  error: string = '';
  isLoading = false;

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

    this.artistService.getArtistDetails(artistId)
      .subscribe(res => {
        this.isLoading = false;
        this.artist = res;
      }, error => {
        this.isLoading = false;
        this.error = error.message;
      })
  }
  getArtistTacks(){}
}
