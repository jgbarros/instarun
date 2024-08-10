import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import { MasterService } from './services/master.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    CreateOrderComponent,
    RestaurantItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
