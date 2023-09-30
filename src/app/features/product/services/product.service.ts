import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GetAllProductsModel } from '../models/getAllProductsModel';
import { AddProductModel } from '../models/addProductModel';
import { UpdateProductModel } from '../models/updateProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private controllerUrl: string = environment.BASE_API_URL + 'products';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllProductsModel[]> {
    return this.httpClient.get<GetAllProductsModel[]>(this.controllerUrl);
  }

  getById(id: number): Observable<GetAllProductsModel> {
    return this.httpClient.get<GetAllProductsModel>(
      this.controllerUrl + '/getById?id=' + id
    );
  }

  add(model: AddProductModel) {
    return this.httpClient.post(this.controllerUrl, model);
  }

  update(model: UpdateProductModel) {
    return this.httpClient.put(this.controllerUrl, model);
  }

  delete(id: number) {
    return this.httpClient.delete(this.controllerUrl + '?id=' + id);
  }
}
