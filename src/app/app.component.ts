import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dvt-deezer-interview';

  @Output() emitSearchToArtist = new EventEmitter<string>();

}
