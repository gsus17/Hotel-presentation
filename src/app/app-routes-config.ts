import { Routes } from '../../node_modules/@angular/router';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel/hotel-list.component';


export const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'hotel-list', component: HotelListComponent }
];
