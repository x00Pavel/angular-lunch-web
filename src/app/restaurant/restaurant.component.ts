import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { Restaurant, RestaurantMenu } from '../restaurants';
import { MenuService } from '../menu.service';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Input()restaurant!: Restaurant;
  menuJSON!: {};
  weekMenu!: string | undefined;
  public finished_loading = true;
  public hideToggle = true;
  constructor(private menuService: MenuService) { };
  
  ngOnInit(): void {
    this.menuService
      .getMenu(this.restaurant.shortName)
      .subscribe((data) => {
        this.menuJSON = data.menu;
        this.weekMenu = data.week_menu;
        this.finished_loading = false;
      });
  }

}
