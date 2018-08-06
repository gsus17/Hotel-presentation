import { Injectable } from '@angular/core';
import { Hotel } from './hotel.entity';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  /**
   * Api url request.
   * @private
   * @type {string}
   * @memberof HotelServiceService
   */
  private hotelUrl: string;

  constructor(private httpClient: HttpClient) {
    this.hotelUrl = environment.apiUrl;
  }

  /**
   * Return all hotels.s
   * @returns {Hotel[]}
   * @memberof HotelServiceService
   */
  public getAllHotel(): Promise<void | Hotel[]> {
    console.log(`${HotelServiceService.name}::getAllHotel`);

    return this.httpClient.get(`${this.hotelUrl}/hotels`)
      .toPromise()
      .then(response => response as Hotel[])
      .catch(() => {
      });
  }

  /**
   * Return hotel filtered list.
   * @param {string} query
   * @param {string[]} stars
   * @returns {Hotel[]}
   * @memberof HotelServiceService
   */
  public filterHotels(query: string, stars: string[]): Promise<void | Hotel[]> {
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

    const limitStars: number = Math.max.apply(Math, starsNumber);

    return this.httpClient.get(`${this.hotelUrl}/hotels/${query}&${limitStars}`)
      .toPromise()
      .then(response => response as Hotel[])
      .catch(() => {
      });
  }
}
