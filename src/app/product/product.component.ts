import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../services/products.service';
import { IProduct } from '../product/productinterface';
import {CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData (localeFr,'fr');
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductsService],
})
export class ProductComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  productId = 0;
  productService = inject(ProductsService);
  product : IProduct | undefined;


  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = this.productService.getProductsById(productId);
  }

  ngOnInit(): void {}
      
  
}
