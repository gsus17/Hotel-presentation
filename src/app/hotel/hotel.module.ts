import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelServiceService } from './hotel-service.service';
import { FlexLayoutModule } from '../../../node_modules/@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HotelListComponent,
    HotelCardComponent,
    HotelFilterComponent],
  providers: [
    HotelServiceService
  ]
})
export class HotelModule { }
