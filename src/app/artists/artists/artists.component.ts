import {Component, OnInit} from '@angular/core';
import {ArtistService} from "../../services/artists/artist.service";
import {Utils} from "../../utils/Utils";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Array<any> = [];
  error = undefined;
  isLoading = false;
  searchString = '';
  totalItems = 0;
  currentIndex = 0;

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

  getArtistSearchResults(index = 0) {

    this.isLoading = true;
    this.error = undefined;
    this.artistService.getSearchResults(this.searchString, index)
      .subscribe(res => {
        this.isLoading = false;

        this.artists = res?.data;
        this.totalItems = res?.total;
      }, error => {
        this.isLoading = false;
        console.log(error)
        this.error = error.message;
      })
  }

  moveToNextPage( move = 1) {

    if (this.currentIndex >= 25 && move === 0) {
      this.currentIndex += -25;
    }
    if (this.currentIndex <= this.totalItems && move === 1) {
      this.currentIndex += 25;
    }
    this.getArtistSearchResults(this.currentIndex);
  }
}
