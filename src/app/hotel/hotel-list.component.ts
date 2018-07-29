import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from './hotel-service.service';
import { Hotel } from './hotel.entity';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public hoteles: Hotel[] = [];

  constructor(private hotelServiceService: HotelServiceService) { }

  ngOnInit() {
    this.hoteles = this.hotelServiceService.getAllHotel();
  }

}
