import { Injectable } from '@angular/core';
import { Product } from '../app/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getProducts(): Product[] {
    return this.products;
  }

  private products: Product[] = [];

  constructor(private http: HttpClient) {
    console.warn('creating products');
    this.products[0] = new Product(1021, 'Tata', 'Dish TV', 10, 2500);
    this.products[1] = new Product(3023, 'Wipro', 'Blubs', 210, 300);
    this.products[2] = new Product(3421, 'TVS', 'Belts', 210, 5500);
    this.products[3] = new Product(3021, 'Reliance', 'Dish TV', 50, 4500);
    this.products[4] = new Product(4328, 'ActFiber', 'Router', 60, 1400);
    this.products[5] = new Product(9096, 'Samsung', 'Smart TV', 50, 72500);
    this.products[6] = new Product(6544, 'LG', 'Airconditioners', 20, 52500);
    this.products[7] = new Product(6754, 'Crompton', 'Ceiling Fans', 25, 1500);
    this.products[8] = new Product(
      2901,
      'Carrier',
      'Aircondirioners',
      5,
      50500
    );
    this.products[9] = new Product(7213, 'Usha', 'Table fans', 40, 1200);
    this.products[10] = new Product(4542, 'One+', 'Mobiles', 50, 82500);
  }

  // we want to fetch all the products from product API
  // http://localhost:8090/product/api1.0/productsinfo

  fetchAllProducts(): Observable<any> {
    const url: string = 'http://localhost:8090/product/api1.0/productsinfo';
    return this.http.get(url);
  }

  addProduct(product: Product): Observable<any> {
    const url: string = 'http://localhost:8090/product/api1.0/addProduct';
    return this.http.post(url, product, {
      headers: new HttpHeaders({ myHeader: 'myvalue' }),
    });
  }
}
