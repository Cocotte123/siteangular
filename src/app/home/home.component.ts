import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import { CommonModule,registerLocaleData } from '@angular/common';
import {IProduct} from '../product/productinterface';
import localeFr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from '../pipes/filter.by.name.pipe';
import {SortByPricePipe} from '../pipes/sort-by-price.pipe';

registerLocaleData (localeFr,'fr');
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByNamePipe,SortByPricePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductsService],
})
export class HomeComponent implements OnInit {
  public products: IProduct[] = [];

  searchText: string ='';
  
  constructor(public productsService: ProductsService){};

  ngOnInit(): void {
      this.products = this.productsService.getProducts();
  }

  orderBy: "asc" | "desc" = "asc";
}
