import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.scss']
})
export class RestaurantItemsComponent {

  items: any[] = [];
  constructor(private activate: ActivatedRoute, private master: MasterService){
    this.activate.params.subscribe((res: any)=> {
      debugger;
      this.loadFoodItemsByCategory(res.categoryId)
    });
  }

  loadFoodItemsByCategory(id: number){
    this.master.getItemsByResurantCategoryId(id).subscribe((res: any)=>{
      this.items = res;
      console.log("LOG: " + res);
      debugger;
    })
  }
}
