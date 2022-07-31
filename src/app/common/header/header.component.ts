import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArtistService} from "../../services/artists/artist.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchString: any = '';

  constructor(public router: Router, public artistService: ArtistService) {

  }


  searchArtist() {
    if (this.router.url !== '/artists') {
      this.router.navigate(['/artists'])
    }
    this.artistService.sendSearchToArtists(this.searchString);
  }
}
