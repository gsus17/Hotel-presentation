import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterModel } from './hotel-filtel.model';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.css']
})
export class HotelFilterComponent implements OnInit {

  /**
   * Emit filter hotel event.
   * @memberof HotelFilterComponent
   */
  @Output() filterHotelEmitter = new EventEmitter<FilterModel>();

  /**
   * Filter model.
   * @type {FilterModel}
   * @memberof HotelFilterComponent
   */
  public model: FilterModel;

  constructor() {
    console.log(`${HotelFilterComponent.name}::ctrl`);

   }

  ngOnInit() {

    this.model = {
      searchLabel: '',
      starOptions: [
        { name: 'star[]', value: 'Todas las estrellas', checked: true },
        { name: 'star[]', value: '5', checked: false },
        { name: 'star[]', value: '4', checked: false },
        { name: 'star[]', value: '3', checked: false },
        { name: 'star[]', value: '3', checked: false },
        { name: 'star[]', value: '2', checked: false }
      ]
    };

  }

  /**
   * Emit selection hotel event.
   * @memberof HotelFilterComponent
   */
  public searchHotel(): void {
    console.log(`${HotelFilterComponent.name}::searchHotel model %o`, this.model);
    this.filterHotelEmitter.emit(this.model);

  }

  /**
   * Return array of star number.
   * @param {string} value
   * @returns
   * @memberof HotelFilterComponent
   */
  public getStar(value: string) {
    // tslint:disable-next-line:radix
    const valueNumber: number = parseInt(value);
    return new Array(valueNumber);
  }

  /**
   * If value is number type show the star.
   * @param {string} value
   * @returns
   * @memberof HotelFilterComponent
   */
  public showStar(value: string) {
    return value !== 'Todas las estrellas';
  }

}
