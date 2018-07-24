import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    HotelFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
