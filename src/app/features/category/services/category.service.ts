import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private controllerUrl = environment.BASE_API_URL + 'categories';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.controllerUrl);
  }
}
