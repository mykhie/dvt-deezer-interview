import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './common/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
