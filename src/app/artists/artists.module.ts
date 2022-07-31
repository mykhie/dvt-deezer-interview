import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistDetailsComponent} from "./artist-details/artist-details.component";
import {ArtistsComponent} from "./artists/artists.component";
import {RouterModule} from "@angular/router";
import {AppModule} from "../app.module";


const routes = [
  {
    path: '', component: ArtistsComponent
  },
  {
    path: ':id', component: ArtistDetailsComponent
  },
];
@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistDetailsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AppModule,
    ]
})
export class ArtistsModule { }
