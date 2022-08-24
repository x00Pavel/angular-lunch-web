import { Component, Input, OnInit } from '@angular/core';
import { Restaurant, RestaurantMenu } from '../restaurants';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input()restaurant!: Restaurant;
  menuJSON!: {};
  weekMenu!: string | undefined;

  constructor(private menuService: MenuService) { };
  
  ngOnInit(): void {
    this.menuService
      .getMenu(this.restaurant.shortName)
      .subscribe((data) => {
        this.menuJSON = data.menu;
        this.weekMenu = data.week_menu
      });
  }

}
