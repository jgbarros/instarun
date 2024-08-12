import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  
  getAllFoodCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/category');
  }

  getItemsByResurantCategoryId(id: number) {
    return this.http.get('http://localhost:3000/itemCategory?id=' + id);
  }
}
