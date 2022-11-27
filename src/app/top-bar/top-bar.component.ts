import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {

  // define myDate string variable
  myDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  constructor() {
  }

  ngOnInit(): void {
  }

}
