import {Component, OnInit} from '@angular/core';
import {ArtistModel} from "../../models/artist.model";
import {ArtistService} from "../../services/artists/artist.service";
import {Utils} from "../../utils/Utils";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Array<any> = [];
  error: string | undefined;
  isLoading = false;
  searchString = '';

  constructor(public artistService: ArtistService) {

  }

  ngOnInit(): void {
    this.artistService.searchString.subscribe(e => {
      this.searchString = e;
      this.getArtistSearchResults();
    })

  }

  returnShortNumberString(number) {
    return Utils.shortNumber(number);
  }

  getArtistSearchResults() {

    this.isLoading = true;

    this.artistService.getSearchResults(this.searchString)
      .subscribe(res => {
        this.isLoading = false;
        this.artists = res?.data;
      }, error => {
        this.isLoading = false;
        this.error = error.message;
      })
  }
}
