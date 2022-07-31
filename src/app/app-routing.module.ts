import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";
import {ArtistsComponent} from "./artists/artists/artists.component";

const routes: Routes = [


  {
    path: 'artists',
    loadChildren: () => import('src/app/artists/artists.module').then(m => m.ArtistsModule)
  },

  {
    path: '', component: ArtistsComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

}
