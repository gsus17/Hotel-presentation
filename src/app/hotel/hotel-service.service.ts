import { Injectable } from '@angular/core';
import { Hotel } from './hotel.entity';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  private hoteles: Hotel[] = [
    {
      'id': '249942',
      'name': 'Hotel Stefanos',
      'stars': 3,
      'price': 994.18,
      'image': '4900059_30_b.jpg',
      'amenities': [
        'safety-box',
        'nightclub',
        'deep-soaking-bathtub',
        'beach',
        'business-center'
      ]
    },
    {
      'id': '161901',
      'name': 'Hotel Santa Cruz',
      'stars': 3,
      'price': 1267.57,
      'image': '6623490_6_b.jpg',
      'amenities': [
        'nightclub',
        'business-center',
        'bathtub',
        'newspaper',
        'restaurant'
      ]
    },
    {
      'id': '161914',
      'name': 'NM Lima Hotel',
      'stars': 4,
      'price': 1445.5,
      'image': '981018_26_b.jpg',
      'amenities': [
        'business-center',
        'nightclub',
        'deep-soaking-bathtub',
        'fitness-center',
        'garden'
      ]
    },
    {
      'id': '208599',
      'name': 'El Golf Hotel Boutique',
      'stars': 4,
      'price': 1513.45,
      'image': '1191401_110_b.jpg',
      'amenities': [
        'safety-box',
        'bathrobes',
        'business-center',
        'beach-pool-facilities',
        'restaurant'
      ]
    },
    {
      'id': '236309',
      'name': 'Casa Andina Select Miraflores',
      'stars': 4,
      'price': 1545.46,
      'image': '2a5bb415_b.jpg',
      'amenities': [
        'coffe-maker',
        'safety-box',
        'restaurant',
        'garden',
        'children-club'
      ]
    },
    {
      'id': '161899',
      'name': 'Radisson Hotel Decapolis Miraflores',
      'stars': 4,
      'price': 2314.61,
      'image': '46512_29_b.jpg',
      'amenities': [
        'bathtub',
        'separate-bredroom',
        'safety-box',
        'business-center',
        'beach-pool-facilities'
      ]
    },

  ];

  constructor() { }

  /**
   * Return all hotels.s
   * @returns {Hotel[]}
   * @memberof HotelServiceService
   */
  public getAllHotel(): Hotel[] {
    console.log(`${HotelServiceService.name}::getAllHotel`);

    return this.hoteles;
  }

  /**
   * Return hotel filtered list.
   * @param {string} query
   * @param {string[]} stars
   * @returns {Hotel[]}
   * @memberof HotelServiceService
   */
  public filterHotels(query: string, stars: string[]): Hotel[] {
    console.log(`${HotelServiceService.name}::filterHotels query %o`, query);
    const starsNumber: number[] = [];
    stars.forEach((item: string) => {

      if (item === 'Todas las estrellas') {
        item = '0';
      }
      // tslint:disable-next-line:radix
      const starNumber = parseInt(item);
      starsNumber.push(starNumber);
    });

    const filteredList: Hotel[] = this.hoteles.filter(
      (hotel) => hotel.name.toLocaleLowerCase().indexOf(
        query.toLocaleLowerCase()) > -1 && starsNumber.indexOf(0) > -1
        || hotel.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1 && starsNumber.indexOf(hotel.stars) > -1);
    console.log(`${HotelServiceService.name}::filterHotels filteredList %o`, filteredList);

    return filteredList;
  }
}
