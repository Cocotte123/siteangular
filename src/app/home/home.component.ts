import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import { CommonModule,registerLocaleData } from '@angular/common';
import {IProduct} from '../product/productinterface';
import localeFr from '@angular/common/locales/fr'

registerLocaleData (localeFr,'fr');
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
