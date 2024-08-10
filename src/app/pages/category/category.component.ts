import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[] = [];
  category: Category = new Category
  constructor(private masterService: MasterService){
    
  }

  ngOnInit(): void {
    this.loadAllFoodCategory();
  }

  loadAllFoodCategory() {
    this.masterService.getAllFoodCategory().subscribe((res: Category[]) => {
      this.categoryList = res;
    });
  }
}
