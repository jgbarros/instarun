import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList: any[] = [];
  constructor(private masterService: MasterService){
    
  }

  ngOnInit(): void {
    this.loadAllFoodCategory();
  }

  loadAllFoodCategory(){
    this.masterService.getAllFoodCategory().subscribe((res: any) => {
      this.categoryList = res;
    });
  }
}
