import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent{

  @Input() totalItems = 0;
  @Input() currentItems = 0;
  @Output() newIndex = new EventEmitter<number>();
  currentIndex = 0;

  constructor() {
  }


  loadMore(move) {
    if (this.currentItems > 25 && move === -1) {
      this.currentIndex += - 25;
      this.newIndex.emit(this.currentIndex);
    }
    if (this.currentItems <= this.totalItems && move === 1) {
      this.currentIndex += 25;
      this.newIndex.emit(this.currentIndex);
    }


  }
}
