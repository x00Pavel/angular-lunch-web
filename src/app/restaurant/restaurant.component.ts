import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants';
import { MenuService } from '../menu.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input()restaurant!: Restaurant;
  menu!: Observable<{
    menu: JSON,
    name:string,
    short_name: string,
    week_menu: string | undefined}>;

  constructor(private menuService: MenuService) { };

  ngOnInit(): void {
    this.menu = this.menuService.getMenu(this.restaurant.shortName);
  }

}
