import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
import { Category } from 'src/app/model/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[] = [];
  category: Category = new Category

  constructor(private masterService: MasterService, private router: Router){
    
  }

  ngOnInit(): void {
    this.loadAllFoodCategory();
  }

  loadAllFoodCategory() {
    this.masterService.getAllFoodCategory().subscribe((res: Category[]) => {
      this.categoryList = res;
    });
  }

  navigate(item: number){
    this.router.navigate(['restaurant-items', item])
    console.log("ITEM NAVIGATE: " + item);
  }
}
