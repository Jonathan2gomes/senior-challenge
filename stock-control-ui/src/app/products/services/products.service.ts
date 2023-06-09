import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {delay, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private readonly API = '/assets/products.json';

  private readonly API = 'http://localhost:8080/product/';

  constructor(private httpClient: HttpClient) {
  }

  list() {
    return this.httpClient.get<Product[]>(this.API)
      .pipe(
        tap(products => console.log(products))
      );
  }
}
