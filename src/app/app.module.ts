import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { SafehtmlPipe } from './safehtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RestaurantComponent,
    RestaurantListComponent,
    SafehtmlPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: RestaurantListComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
