import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import { CommonModule } from '@angular/common';
import {IProduct} from '../product/productinterface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductsService],
})
export class HomeComponent implements OnInit {
  public products: IProduct[] = [];
  
  constructor(public productsService: ProductsService){};

  ngOnInit(): void {
      this.products = this.productsService.getProducts();
  }
}
