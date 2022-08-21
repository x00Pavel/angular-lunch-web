import { Component } from '@angular/core';

import { restaurants } from '../restaurants';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  restaurants = restaurants;
}
