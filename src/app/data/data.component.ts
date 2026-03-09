import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  productId: number = 1456;
  description: string = 'iPhone15';
  brand: string = 'Apple';
  price: number = 1560.0;
  isAvailable: boolean = true;
  orderedQty: number = -1;
  availableQty: number = 100;
  isMember: boolean = true;
  isButtonEnabled: boolean = false;
  freeShipping: string = this.price < 10000 ? 'red' : 'green';

  products: any[] = [
    {
      productId: 101,
      description: 'Foldable Mobile',
      brand: 'Samsung',
      availableQty: 200,
      price: 60000,
      freeShipping: 'green',
    },
    {
      productId: 101,
      description: 'Foldable Mobile',
      brand: 'Samsung',
      availableQty: 200,
      price: 60000,
      freeShipping: 'green',
    },
    {
      productId: 101,
      description: 'Foldable Mobile',
      brand: 'Samsung',
      availableQty: 200,
      price: 60000,
      freeShipping: 'red',
    },
    {
      productId: 101,
      description: 'Foldable Mobile',
      brand: 'Samsung',
      availableQty: 200,
      price: 60000,
      freeShipping: 'green',
    },
    {
      productId: 101,
      description: 'Foldable Mobile',
      brand: 'Samsung',
      availableQty: 200,
      price: 60000,
      freeShipping: 'red',
    },
    {
      productId: 101,
      description: 'Foldable Mobile',
      brand: 'Samsung',
      availableQty: 200,
      price: 60000,
      freeShipping: 'green',
    },
  ];

  products2: Product[] = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.products2 = this.service.getProducts();
  }

  public placeOrder(): void {
    if (this.orderedQty < this.availableQty)
		this.isAvailable = true;
    else this.isAvailable = false;

    console.log('final order received', this.orderedQty);
  }
}
