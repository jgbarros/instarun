import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

const routes: Routes = [
  { 
    path: '', component: CategoryComponent
  },
  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: 'foodCategory', component: CategoryComponent
  },
  { 
    path: 'restaurant-items/:categoryName', component: RestaurantItemsComponent
  },
  { 
    path: 'create-order', component: CreateOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
