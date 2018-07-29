import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../hotel.entity';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  /**
   * Hotel.
   * @type {Hotel}
   * @memberof HotelCardComponent
   */
  @Input() public hotel: Hotel;

  /**
   * Emit selection hotel event.
   * @memberof HotelCardComponent
   */
  @Output() selectHotelEmitter = new EventEmitter<Hotel>();

  constructor() {
    console.log(`${HotelCardComponent.name}::ctrl`);

  }

  ngOnInit() {
  }

  /**
   * Emit selection hotel event.
   * @param {Hotel} hotel
   * @memberof HotelCardComponent
   */
  public selectHotel(hotel: Hotel) {
    console.log(`${HotelCardComponent.name}::selectHotel`);
    this.selectHotelEmitter.emit(hotel);
  }

  /**
   * Return stars list.
   * @returns {number[]}
   * @memberof HotelCardComponent
   */
  public getArrayStars(): number[] {
    return new Array(this.hotel.stars);
  }

}
