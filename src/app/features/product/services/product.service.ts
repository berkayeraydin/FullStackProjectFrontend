import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetAllProductsModel } from '../models/getAllProductsModel';
import { AddProductModel } from '../models/addProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private controllerUrl: string = environment.BASE_API_URL + 'products';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllProductsModel[]> {
    return this.httpClient.get<GetAllProductsModel[]>(this.controllerUrl);
  }

  add(model: AddProductModel) {
    return this.httpClient.post(this.controllerUrl, model);
  }
}
