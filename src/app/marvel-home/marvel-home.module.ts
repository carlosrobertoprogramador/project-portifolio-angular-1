import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelHomeRoutingModule } from './marvel-home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { MarvelHomeComponent } from './marvel-home.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    MarvelHomeRoutingModule
  ],
  providers: [],
    bootstrap: [MarvelHomeComponent]

})
export class MarvelHomeModule { }
