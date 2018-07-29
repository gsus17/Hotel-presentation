import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from './hotel-service.service';
import { Hotel } from './hotel.entity';
import { FilterModel } from './hotel-filter/hotel-filtel.model';

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

  constructor(private hotelServiceService: HotelServiceService) { }

  ngOnInit() {
    this.hoteles = this.hotelServiceService.getAllHotel();
  }

  /**
   * Filter hotel list.
   * @param {FilterModel} filter
   * @memberof HotelListComponent
   */
  public filterHotels(filter: FilterModel) {
    console.log(`${HotelListComponent.name}::filterHotels filter %o`, filter);
    const starsSelected: string[] = this.getStarsSelected(filter);

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
