import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from './hotel-service.service';
import { Hotel } from './hotel.entity';
import { FilterModel } from './hotel-filter/hotel-filtel.model';
import { isDefined } from '../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  /**
   * Hotel list.
   * @type {Hotel[]}
   * @memberof HotelListComponent
   */
  public hoteles: Hotel[] = [];

  constructor(private hotelServiceService: HotelServiceService) {
    console.log(`${HotelListComponent.name}::ctrl`);

  }

  ngOnInit() {
    this.hotelServiceService.getAllHotel()
      .then((hotels: Hotel[]) => {
        this.hoteles = Object.keys(hotels).map(key => {
          return hotels[key];
        });
      });
  }

  /**
   * Get selected hotel.
   * @param {Hotel} hotel
   * @memberof HotelListComponent
   */
  public selectHotel(hotel: Hotel): void {
    console.log(`${HotelListComponent.name}::selectHotel hotel %o`, hotel);

  }

  /**
   * Filter hotel list.
   * @param {FilterModel} filter
   * @memberof HotelListComponent
   */
  public filterHotels(filter: FilterModel): void {
    console.log(`${HotelListComponent.name}::filterHotels filter %o`, filter);
    const starsSelected: string[] = this.getStarsSelected(filter);
    this.hoteles = this.hotelServiceService.filterHotels(filter.searchLabel, starsSelected);
  }

  /**
   * Return true if hotel list has values.
   * @returns {boolean}
   * @memberof HotelListComponent
   */
  public hasHotelList(): boolean {
    return isDefined(this.hoteles) && this.hoteles.length > 0;
  }

  /**
   * Return stars selected list.
   * @private
   * @param {FilterModel} filter
   * @returns {string[]}
   * @memberof HotelListComponent
   */
  private getStarsSelected(filter: FilterModel): string[] {
    return filter.starOptions
      .filter(opt => opt.checked)
      .map(opt => opt.value);
  }

}
