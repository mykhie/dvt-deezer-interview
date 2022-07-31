import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ArtistService} from "../../services/artists/artist.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchString: any = '';

  constructor(public router: Router, public artistService: ArtistService) {

  }

  ngOnInit(): void {
  }

  searchArtist() {
    if (this.router.url !== '/artists') {
      this.router.navigate(['/artists'])
    }
    this.artistService.sendSearchToArtists(this.searchString);
  }
}
