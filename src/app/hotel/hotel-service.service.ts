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
    {
      'id': '104074',
      'name': 'Antigua Miraflores Hotel',
      'stars': 3,
      'price': 1862.16,
      'image': '480835_73_b.jpg',
      'amenities': [
        'restaurant',
        'separate-bredroom',
        'business-center',
        'bathrobes',
        'beach'
      ]
    },
    {
      'id': '512559',
      'name': 'Casa Falleri Boutique Hotel',
      'stars': 3,
      'price': 1634.03,
      'image': '11908954_150_b.jpg',
      'amenities': [
        'nightclub',
        'garden',
        'coffe-maker',
        'kitchen-facilities',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '228165',
      'name': 'Habitat Hotel',
      'stars': 3,
      'price': 1061.79,
      'image': '12808943_13_b.jpg',
      'amenities': [
        'beach-pool-facilities',
        'deep-soaking-bathtub',
        'bathtub',
        'children-club',
        'beach'
      ]
    },
    {
      'id': '137536',
      'name': 'Hotel San Blas',
      'stars': 3,
      'price': 1106.56,
      'image': '4417477_17_b.jpg',
      'amenities': [
        'coffe-maker',
        'deep-soaking-bathtub',
        'business-center',
        'bathrobes',
        'safety-box'
      ]
    },
    {
      'id': '266879',
      'name': 'Palmetto Hotel Business San Borja',
      'stars': 3,
      'price': 1105.87,
      'image': '4626475_1_b.jpg',
      'amenities': [
        'safety-box',
        'coffe-maker',
        'restaurant',
        'separate-bredroom',
        'bathtub'
      ]
    },
    {
      'id': '19325',
      'name': 'Foresta Hotel Lima',
      'stars': 4,
      'price': 1941.99,
      'image': '200684_222_b.jpg',
      'amenities': [
        'bathtub',
        'kitchen-facilities',
        'nightclub',
        'deep-soaking-bathtub',
        'garden'
      ]
    },
    {
      'id': '427467',
      'name': 'Royal Inca Hotel',
      'stars': 2,
      'price': 683.5,
      'image': '6900423_6_b.jpg',
      'amenities': [
        'newspaper',
        'coffe-maker',
        'safety-box',
        'kitchen-facilities',
        'bathtub'
      ]
    },
    {
      'id': '277990',
      'name': 'Bayview Hotel',
      'stars': 3,
      'price': 1043.88,
      'image': '1231695_139_b.jpg',
      'amenities': [
        'bathtub',
        'deep-soaking-bathtub',
        'kitchen-facilities',
        'fitness-center',
        'nightclub'
      ]
    },
    {
      'id': '90757',
      'name': 'Casa Andina Premium Miraflores',
      'stars': 4,
      'price': 1887.2,
      'image': '2039609_120_b.jpg',
      'amenities': [
        'children-club',
        'newspaper',
        'restaurant',
        'separate-bredroom',
        'nightclub'
      ]
    },
    {
      'id': '161890',
      'name': 'New Corpac Hotel',
      'stars': 3,
      'price': 886.12,
      'image': '1876197_31_b.jpg',
      'amenities': [
        'children-club',
        'restaurant',
        'fitness-center',
        'bathrobes',
        'safety-box'
      ]
    },
    {
      'id': '314944',
      'name': 'Qorianka Hotel',
      'stars': 2,
      'price': 1024.91,
      'image': '9320547_26_b.jpg',
      'amenities': [
        'children-club',
        'garden',
        'deep-soaking-bathtub',
        'newspaper',
        'kitchen-facilities'
      ]
    },
    {
      'id': '433932',
      'name': 'Casa Suyay',
      'stars': 3,
      'price': 1695.37,
      'image': '8962073_23_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'restaurant',
        'nightclub',
        'newspaper',
        'coffe-maker'
      ]
    },
    {
      'id': '277988',
      'name': 'Casa Bella Miraflores',
      'stars': 3,
      'price': 842.54,
      'image': '4479382_65_b.jpg',
      'amenities': [
        'garden',
        'kitchen-facilities',
        'bathtub',
        'safety-box',
        'business-center'
      ]
    },
    {
      'id': '455161',
      'name': 'Tierra Viva Miraflores Larco',
      'stars': 3,
      'price': 1431.47,
      'image': '6153044_28_b.jpg',
      'amenities': [
        'beach-pool-facilities',
        'newspaper',
        'nightclub',
        'bathrobes',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '260342',
      'name': 'Atton San Isidro',
      'stars': 4,
      'price': 1943.69,
      'image': '4357289_55_b.jpg',
      'amenities': [
        'newspaper',
        'safety-box',
        'business-center',
        'coffe-maker',
        'restaurant'
      ]
    },
    {
      'id': '488116',
      'name': 'Urbano Apartment Miraflores Pardo',
      'stars': 3,
      'price': 1258.4,
      'image': '10968139_27_b.jpg',
      'amenities': [
        'deep-soaking-bathtub',
        'bathtub',
        'fitness-center',
        'restaurant',
        'bathrobes'
      ]
    },
    {
      'id': '132929',
      'name': 'Los Tallanes Hotel & Suites',
      'stars': 3,
      'price': 2014.68,
      'image': '12287657_13_b.jpg',
      'amenities': [
        'nightclub',
        'beach',
        'safety-box',
        'deep-soaking-bathtub',
        'business-center'
      ]
    },
    {
      'id': '266875',
      'name': 'Hotel Ferre Miraflores',
      'stars': 3,
      'price': 1183.19,
      'image': '3045476_5_b.jpg',
      'amenities': [
        'safety-box',
        'newspaper',
        'garden',
        'separate-bredroom',
        'children-club'
      ]
    },
    {
      'id': '411416',
      'name': 'Arawi Lima Miraflores',
      'stars': 4,
      'price': 2099.1,
      'image': '5429945_8_b.jpg',
      'amenities': [
        'fitness-center',
        'beach',
        'children-club',
        'nightclub',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '266877',
      'name': 'Peru Star Boutique Apartments Hotel',
      'stars': 4,
      'price': 1093.37,
      'image': '3124310_1_b.jpg',
      'amenities': [
        'bathtub',
        'restaurant',
        'deep-soaking-bathtub',
        'bathrobes',
        'kitchen-facilities'
      ]
    },
    {
      'id': '106682',
      'name': 'Del Pilar Miraflores Hotel',
      'stars': 3,
      'price': 1713.42,
      'image': '412713_46_b.jpg',
      'amenities': [
        'newspaper',
        'coffe-maker',
        'bathtub',
        'kitchen-facilities',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '266911',
      'name': '1900 Hostel',
      'stars': 1,
      'price': 596.7,
      'image': '4850335_10_b.jpg',
      'amenities': [
        'coffe-maker',
        'garden',
        'kitchen-facilities',
        'beach-pool-facilities',
        'nightclub'
      ]
    },
    {
      'id': '266878',
      'name': 'Machu Picchu Suites',
      'stars': 3,
      'price': 794.74,
      'image': '3688061_52_b.jpg',
      'amenities': [
        'beach',
        'kitchen-facilities',
        'bathtub',
        'garden',
        'restaurant'
      ]
    },
    {
      'id': '411417',
      'name': 'Hotel Señorial',
      'stars': 3,
      'price': 1193.14,
      'image': '7700456_3_b.jpg',
      'amenities': [
        'business-center',
        'beach',
        'garden',
        'separate-bredroom',
        'newspaper'
      ]
    },
    {
      'id': '266871',
      'name': 'Las Palmas',
      'stars': 3,
      'price': 1118.45,
      'image': '4618948_40_b.jpg',
      'amenities': [
        'beach',
        'deep-soaking-bathtub',
        'kitchen-facilities',
        'beach-pool-facilities',
        'newspaper'
      ]
    },
    {
      'id': '266872',
      'name': 'Miraflores Lodge',
      'stars': 3,
      'price': 1090.91,
      'image': '3612838_12_b.jpg',
      'amenities': [
        'coffe-maker',
        'restaurant',
        'kitchen-facilities',
        'bathtub',
        'nightclub'
      ]
    },
    {
      'id': '266873',
      'name': 'Casa Wayra Bed & Breakfast Miraflores',
      'stars': 3,
      'price': 1175.85,
      'image': '3688064_92_b.jpg',
      'amenities': [
        'newspaper',
        'beach-pool-facilities',
        'coffe-maker',
        'deep-soaking-bathtub',
        'kitchen-facilities'
      ]
    },
    {
      'id': '266874',
      'name': 'HosteLima',
      'stars': 2,
      'price': 297.65,
      'image': '4982472_16_b.jpg',
      'amenities': [
        'business-center',
        'safety-box',
        'kitchen-facilities',
        'restaurant',
        'fitness-center'
      ]
    },
    {
      'id': '266919',
      'name': '3B Barrancos Chic and Basic B& B',
      'stars': 3,
      'price': 1488.42,
      'image': '9ae3980d_b.jpg',
      'amenities': [
        'restaurant',
        'children-club',
        'nightclub',
        'safety-box',
        'beach'
      ]
    },
    {
      'id': '162141',
      'name': 'Hotel El Ducado',
      'stars': 3,
      'price': 1624.1,
      'image': '1688562_53_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'garden',
        'nightclub',
        'business-center',
        'safety-box'
      ]
    },
    {
      'id': '266914',
      'name': 'LYNIK La Casa de Blanca',
      'stars': 2,
      'price': 676.59,
      'image': '4846837_5_b.jpg',
      'amenities': [
        'deep-soaking-bathtub',
        'beach-pool-facilities',
        'bathtub',
        'separate-bredroom',
        'kitchen-facilities'
      ]
    },
    {
      'id': '26396',
      'name': 'Country Club Lima Hotel',
      'stars': 5,
      'price': 3109.07,
      'image': '115596_172_b.jpg',
      'amenities': [
        'restaurant',
        'garden',
        'safety-box',
        'newspaper',
        'beach-pool-facilities'
      ]
    },
    {
      'id': '88527',
      'name': 'Hotel Libertador Lima',
      'stars': 4,
      'price': 1708.74,
      'image': '519318_82_b.jpg',
      'amenities': [
        'bathrobes',
        'beach-pool-facilities',
        'business-center',
        'newspaper',
        'nightclub'
      ]
    },
    {
      'id': '450977',
      'name': 'Los Girasoles',
      'stars': 3,
      'price': 1177.32,
      'image': '3474909_52_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'bathtub',
        'beach',
        'fitness-center',
        'children-club'
      ]
    },
    {
      'id': '35715',
      'name': 'Melia Lima',
      'stars': 4,
      'price': 2099.3,
      'image': '484066_158_b.jpg',
      'amenities': [
        'safety-box',
        'garden',
        'nightclub',
        'beach-pool-facilities',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '498515',
      'name': 'Casa Aika',
      'stars': 3,
      'price': 757.58,
      'image': '5987363_77_b.jpg',
      'amenities': [
        'newspaper',
        'business-center',
        'nightclub',
        'children-club',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '431154',
      'name': 'Kingdom Hotel',
      'stars': 3,
      'price': 1754.36,
      'image': '9365800_92_b.jpg',
      'amenities': [
        'children-club',
        'bathtub',
        'beach',
        'business-center',
        'beach-pool-facilities'
      ]
    },
    {
      'id': '454496',
      'name': 'Hotel Panamericano',
      'stars': 3,
      'price': 798.53,
      'image': '11920422_40_b.jpg',
      'amenities': [
        'bathtub',
        'children-club',
        'beach',
        'newspaper',
        'kitchen-facilities'
      ]
    },
    {
      'id': '266865',
      'name': 'Condors House - Hostel',
      'stars': 2,
      'price': 301.86,
      'image': '5030807_9_b.jpg',
      'amenities': [
        'newspaper',
        'separate-bredroom',
        'nightclub',
        'restaurant',
        'garden'
      ]
    },
    {
      'id': '266866',
      'name': 'House Inn Backpacker',
      'stars': 2,
      'price': 280.8,
      'image': '4982482_7_b.jpg',
      'amenities': [
        'safety-box',
        'beach-pool-facilities',
        'kitchen-facilities',
        'separate-bredroom',
        'bathrobes'
      ]
    },
    {
      'id': '266900',
      'name': 'La Casa Nostra Hostel',
      'stars': 2,
      'price': 1228.5,
      'image': '2537805_1_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'fitness-center',
        'garden',
        'nightclub',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '266867',
      'name': 'Hotel Kamana',
      'stars': 3,
      'price': 846.93,
      'image': '4478078_39_b.jpg',
      'amenities': [
        'bathtub',
        'fitness-center',
        'restaurant',
        'newspaper',
        'separate-bredroom'
      ]
    },
    {
      'id': '91522',
      'name': 'Embajadores Hotel',
      'stars': 3,
      'price': 1031.9,
      'image': '386779_53_b.jpg',
      'amenities': [
        'garden',
        'nightclub',
        'bathrobes',
        'coffe-maker',
        'business-center'
      ]
    },
    {
      'id': '266908',
      'name': 'Sm Hotel And Business',
      'stars': 3,
      'price': 969.64,
      'image': '4688439_88_b.jpg',
      'amenities': [
        'children-club',
        'separate-bredroom',
        'deep-soaking-bathtub',
        'bathtub',
        'restaurant'
      ]
    },
    {
      'id': '157628',
      'name': 'Fiesta Hotel & Casino',
      'stars': 4,
      'price': 2927.68,
      'image': '1777231_85_b.jpg',
      'amenities': [
        'deep-soaking-bathtub',
        'fitness-center',
        'separate-bredroom',
        'coffe-maker',
        'restaurant'
      ]
    },
    {
      'id': '266903',
      'name': 'San Isidro Inn',
      'stars': 3,
      'price': 1053,
      'image': '3952922_27_b.jpg',
      'amenities': [
        'children-club',
        'bathtub',
        'fitness-center',
        'separate-bredroom',
        'newspaper'
      ]
    },
    {
      'id': '266904',
      'name': 'Posada Peregrinus',
      'stars': 2,
      'price': 614.25,
      'image': '4546549_9_b.jpg',
      'amenities': [
        'nightclub',
        'kitchen-facilities',
        'fitness-center',
        'bathrobes',
        'separate-bredroom'
      ]
    },
    {
      'id': '413051',
      'name': 'Courtyard Lima Miraflores',
      'stars': 4,
      'price': 2240.34,
      'image': '9866569_13_b.jpg',
      'amenities': [
        'separate-bredroom',
        'safety-box',
        'beach-pool-facilities',
        'kitchen-facilities',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '76136',
      'name': 'Hotel Estelar Miraflores',
      'stars': 4,
      'price': 1927.17,
      'image': 'b3e281b1_b.jpg',
      'amenities': [
        'nightclub',
        'safety-box',
        'business-center',
        'bathtub',
        'coffe-maker'
      ]
    },
    {
      'id': '76414',
      'name': 'Swissôtel Lima',
      'stars': 5,
      'price': 3397.94,
      'image': 'd44c63f1_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'coffe-maker',
        'deep-soaking-bathtub',
        'bathrobes',
        'newspaper'
      ]
    },
    {
      'id': '473343',
      'name': 'Luxury Hotel Inkari',
      'stars': 4,
      'price': 2049.84,
      'image': '9438646_27_b.jpg',
      'amenities': [
        'bathtub',
        'kitchen-facilities',
        'beach',
        'fitness-center',
        'coffe-maker'
      ]
    },
    {
      'id': '266870',
      'name': 'La Paz Apart Hotel',
      'stars': 3,
      'price': 2535.14,
      'image': '4099852_34_b.jpg',
      'amenities': [
        'bathrobes',
        'newspaper',
        'deep-soaking-bathtub',
        'garden',
        'kitchen-facilities'
      ]
    },
    {
      'id': '84153',
      'name': 'Basadre Suites Boutique Hotel',
      'stars': 3,
      'price': 997.16,
      'image': '1110876_60_b.jpg',
      'amenities': [
        'bathrobes',
        'deep-soaking-bathtub',
        'safety-box',
        'separate-bredroom',
        'fitness-center'
      ]
    },
    {
      'id': '187309',
      'name': 'Hotel Melodia',
      'stars': 3,
      'price': 1053,
      'image': '7864635_1_b.jpg',
      'amenities': [
        'garden',
        'bathtub',
        'bathrobes',
        'safety-box',
        'separate-bredroom'
      ]
    },
    {
      'id': '458601',
      'name': 'Hotel Plaza Mayor',
      'stars': 2,
      'price': 469.94,
      'image': '9866986_18_b.jpg',
      'amenities': [
        'fitness-center',
        'garden',
        'deep-soaking-bathtub',
        'coffe-maker',
        'nightclub'
      ]
    },
    {
      'id': '300212',
      'name': 'Hotel Nobility',
      'stars': 3,
      'price': 1547.88,
      'image': '6214511_57_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'garden',
        'nightclub',
        'children-club',
        'safety-box'
      ]
    },
    {
      'id': '187306',
      'name': 'Casa Andina Standard Miraflores Centro',
      'stars': 3,
      'price': 1218.06,
      'image': '85248126_b.jpg',
      'amenities': [
        'fitness-center',
        'children-club',
        'separate-bredroom',
        'deep-soaking-bathtub',
        'bathrobes'
      ]
    },
    {
      'id': '432536',
      'name': 'Wyndham Costa Del Sol Lima City',
      'stars': 4,
      'price': 1749.25,
      'image': '10210122_194_b.jpg',
      'amenities': [
        'children-club',
        'beach',
        'nightclub',
        'beach-pool-facilities',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '27227',
      'name': 'Sonesta Hotel El Olivar Lima',
      'stars': 4,
      'price': 2339.9,
      'image': '525844_90_b.jpg',
      'amenities': [
        'restaurant',
        'coffe-maker',
        'business-center',
        'nightclub',
        'safety-box'
      ]
    },
    {
      'id': '532067',
      'name': 'Thunderbird Hotels J.Pardo',
      'stars': 3,
      'price': 2237.4,
      'image': '1774520_182_b.jpg',
      'amenities': [
        'bathrobes',
        'coffe-maker',
        'children-club',
        'bathtub',
        'kitchen-facilities'
      ]
    },
    {
      'id': '91274',
      'name': 'La Hacienda Hotel Miraflores',
      'stars': 3,
      'price': 2071.2,
      'image': '430037_31_b.jpg',
      'amenities': [
        'newspaper',
        'beach-pool-facilities',
        'beach',
        'garden',
        'fitness-center'
      ]
    },
    {
      'id': '296187',
      'name': 'El Angolo Lima',
      'stars': 3,
      'price': 1864.08,
      'image': '5981696_40_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'bathrobes',
        'restaurant',
        'garden',
        'newspaper'
      ]
    },
    {
      'id': '161918',
      'name': 'Hostal Porta',
      'stars': 3,
      'price': 629.8,
      'image': '1688561_29_b.jpg',
      'amenities': [
        'children-club',
        'separate-bredroom',
        'nightclub',
        'garden',
        'bathtub'
      ]
    },
    {
      'id': '227172',
      'name': 'Hotel Novotel Lima',
      'stars': 4,
      'price': 2091.07,
      'image': '2803127_64_b.jpg',
      'amenities': [
        'beach',
        'kitchen-facilities',
        'children-club',
        'newspaper',
        'beach-pool-facilities'
      ]
    },
    {
      'id': '277989',
      'name': 'ibis Larco Miraflores',
      'stars': 3,
      'price': 1156.91,
      'image': '917bd6d1_b.jpg',
      'amenities': [
        'safety-box',
        'deep-soaking-bathtub',
        'bathrobes',
        'bathtub',
        'business-center'
      ]
    },
    {
      'id': '234536',
      'name': 'Miraflores Suites Centro',
      'stars': 3,
      'price': 841.45,
      'image': '3334784_86_b.jpg',
      'amenities': [
        'beach',
        'kitchen-facilities',
        'newspaper',
        'separate-bredroom',
        'nightclub'
      ]
    },
    {
      'id': '161900',
      'name': 'Radisson Hotel San Isidro',
      'stars': 4,
      'price': 1761.4,
      'image': '1580314_67_b.jpg',
      'amenities': [
        'restaurant',
        'children-club',
        'newspaper',
        'deep-soaking-bathtub',
        'business-center'
      ]
    },
    {
      'id': '433213',
      'name': 'Hotel Boutique Huaca Wasi',
      'stars': 3,
      'price': 1715.28,
      'image': '5379215_11_b.jpg',
      'amenities': [
        'fitness-center',
        'nightclub',
        'beach-pool-facilities',
        'garden',
        'business-center'
      ]
    },
    {
      'id': '239304',
      'name': 'Hotel Inka Path',
      'stars': 2,
      'price': 1088.1,
      'image': '9649999_27_b.jpg',
      'amenities': [
        'fitness-center',
        'deep-soaking-bathtub',
        'garden',
        'separate-bredroom',
        'safety-box'
      ]
    },
    {
      'id': '109664',
      'name': 'Plaza del Bosque Hotel',
      'stars': 4,
      'price': 1889.37,
      'image': '48784_97_b.jpg',
      'amenities': [
        'deep-soaking-bathtub',
        'fitness-center',
        'kitchen-facilities',
        'newspaper',
        'children-club'
      ]
    },
    {
      'id': '111046',
      'name': 'Suites Antique Apart Hotel',
      'stars': 3,
      'price': 1594.88,
      'image': '11820110_10_b.jpg',
      'amenities': [
        'restaurant',
        'coffe-maker',
        'kitchen-facilities',
        'newspaper',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '110914',
      'name': 'Royal Park Hotel',
      'stars': 4,
      'price': 3141.14,
      'image': '583479_86_b.jpg',
      'amenities': [
        'safety-box',
        'deep-soaking-bathtub',
        'coffe-maker',
        'bathrobes',
        'garden'
      ]
    },
    {
      'id': '500017',
      'name': 'El Faro Inn',
      'stars': 3,
      'price': 855.22,
      'image': '9817258_55_b.jpg',
      'amenities': [
        'coffe-maker',
        'beach',
        'garden',
        'safety-box',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '132928',
      'name': 'Hotel San Agustin Riviera',
      'stars': 3,
      'price': 798.89,
      'image': '1354077_84_b.jpg',
      'amenities': [
        'garden',
        'nightclub',
        'bathrobes',
        'bathtub',
        'separate-bredroom'
      ]
    },
    {
      'id': '410363',
      'name': 'Palmetto San Miguel',
      'stars': 3,
      'price': 1057.15,
      'image': '12627687_102_b.jpg',
      'amenities': [
        'newspaper',
        'restaurant',
        'garden',
        'business-center',
        'safety-box'
      ]
    },
    {
      'id': '161908',
      'name': 'BTH',
      'stars': 4,
      'price': 1822.71,
      'image': '897079_215_b.jpg',
      'amenities': [
        'restaurant',
        'bathtub',
        'children-club',
        'bathrobes',
        'safety-box'
      ]
    },
    {
      'id': '137782',
      'name': 'Thunderbird Hotels Carrera',
      'stars': 3,
      'price': 1559.54,
      'image': '1773941_61_b.jpg',
      'amenities': [
        'kitchen-facilities',
        'nightclub',
        'beach',
        'beach-pool-facilities',
        'children-club'
      ]
    },
    {
      'id': '161909',
      'name': 'qp Hotels Lima',
      'stars': 3,
      'price': 1318.17,
      'image': '1876458_102_b.jpg',
      'amenities': [
        'separate-bredroom',
        'newspaper',
        'beach',
        'fitness-center',
        'beach-pool-facilities'
      ]
    },
    {
      'id': '161904',
      'name': 'Sol de Oro Hotel & Suites',
      'stars': 4,
      'price': 1722.41,
      'image': '63569_150_b.jpg',
      'amenities': [
        'fitness-center',
        'garden',
        'beach',
        'restaurant',
        'separate-bredroom'
      ]
    },
    {
      'id': '139167',
      'name': 'Hotel Park Suites',
      'stars': 2,
      'price': 1447.88,
      'image': '00650d24_b.jpg',
      'amenities': [
        'children-club',
        'beach-pool-facilities',
        'restaurant',
        'garden',
        'coffe-maker'
      ]
    },
    {
      'id': '511549',
      'name': 'Inkawasi Hostel Boutique',
      'stars': 2,
      'price': 796.13,
      'image': '4241228_30_b.jpg',
      'amenities': [
        'restaurant',
        'fitness-center',
        'kitchen-facilities',
        'beach',
        'business-center'
      ]
    },
    {
      'id': '110347',
      'name': 'Roosevelt Hotel & Suites',
      'stars': 3,
      'price': 1710.01,
      'image': '81959_63_b.jpg',
      'amenities': [
        'separate-bredroom',
        'nightclub',
        'coffe-maker',
        'beach-pool-facilities',
        'garden'
      ]
    },
    {
      'id': '239178',
      'name': 'The Westin Lima Hotel & Convention Center',
      'stars': 5,
      'price': 3268.52,
      'image': '4359018_144_b.jpg',
      'amenities': [
        'safety-box',
        'kitchen-facilities',
        'bathrobes',
        'fitness-center',
        'coffe-maker'
      ]
    },
    {
      'id': '108545',
      'name': 'Delfines Hotel & Convention Center',
      'stars': 4,
      'price': 3841.81,
      'image': '4d72efed_b.jpg',
      'amenities': [
        'separate-bredroom',
        'business-center',
        'safety-box',
        'children-club',
        'bathrobes'
      ]
    },
    {
      'id': '72019',
      'name': 'Belmond Miraflores Park',
      'stars': 5,
      'price': 9355.52,
      'image': '530284_167_b.jpg',
      'amenities': [
        'coffe-maker',
        'separate-bredroom',
        'garden',
        'children-club',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '433923',
      'name': 'Atelier Hotel',
      'stars': 3,
      'price': 1512.97,
      'image': '5405282_15_b.jpg',
      'amenities': [
        'newspaper',
        'business-center',
        'children-club',
        'beach',
        'coffe-maker'
      ]
    },
    {
      'id': '15102',
      'name': 'Jose Antonio Lima',
      'stars': 4,
      'price': 1914.87,
      'image': '164283a_hb_a_001.jpg',
      'amenities': [
        'garden',
        'business-center',
        'bathrobes',
        'safety-box',
        'beach-pool-facilities'
      ]
    },
    {
      'id': '93911',
      'name': 'El Condado Miraflores Hotel & Suites',
      'stars': 3,
      'price': 1374.56,
      'image': '9291429_9_b.jpg',
      'amenities': [
        'coffe-maker',
        'restaurant',
        'bathtub',
        'beach-pool-facilities',
        'separate-bredroom'
      ]
    },
    {
      'id': '132931',
      'name': 'Suites del Bosque Hotel',
      'stars': 3,
      'price': 1647.73,
      'image': '1574025_73_b.jpg',
      'amenities': [
        'beach-pool-facilities',
        'newspaper',
        'separate-bredroom',
        'safety-box',
        'garden'
      ]
    },
    {
      'id': '132930',
      'name': 'Leon de Oro Inn & Suites',
      'stars': 3,
      'price': 1128,
      'image': '6975518_43_b.jpg',
      'amenities': [
        'nightclub',
        'business-center',
        'safety-box',
        'deep-soaking-bathtub',
        'garden'
      ]
    },
    {
      'id': '161892',
      'name': 'Sonesta Posadas del Inca Miraflores - Lima',
      'stars': 3,
      'price': 1485.63,
      'image': '44e00399_b.jpg',
      'amenities': [
        'garden',
        'restaurant',
        'beach',
        'deep-soaking-bathtub',
        'bathtub'
      ]
    },
    {
      'id': '161891',
      'name': 'B&B Tradiciones',
      'stars': 3,
      'price': 801.45,
      'image': '893882_7_b.jpg',
      'amenities': [
        'newspaper',
        'coffe-maker',
        'safety-box',
        'beach-pool-facilities',
        'nightclub'
      ]
    },
    {
      'id': '132937',
      'name': 'Maria Angola Hotel & Centro de Convenciones',
      'stars': 3,
      'price': 1131.76,
      'image': '23645_15_b.jpg',
      'amenities': [
        'garden',
        'restaurant',
        'children-club',
        'separate-bredroom',
        'deep-soaking-bathtub'
      ]
    },
    {
      'id': '132936',
      'name': 'Hotel Continental',
      'stars': 3,
      'price': 774.53,
      'image': '802720_60_b.jpg',
      'amenities': [
        'deep-soaking-bathtub',
        'coffe-maker',
        'newspaper',
        'beach',
        'children-club'
      ]
    }
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
