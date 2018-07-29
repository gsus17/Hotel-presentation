import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../hotel.entity';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {


  @Input() public hotel: Hotel;

  @Output() selectHotelEmitter = new EventEmitter<Hotel>();

  constructor() {
  }

  ngOnInit() {
  }

  public selectHotel(hotel: Hotel) {
    console.log(`${HotelCardComponent.name}::selectHotel`);
    this.selectHotelEmitter.emit(hotel);
  }

  public getArrayStars(): number[] {
    return new Array(this.hotel.stars);
  }

}
