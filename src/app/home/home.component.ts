import { Component, OnInit, inject } from '@angular/core';
import {ProductsService} from '../services/products.service';
import { CommonModule,registerLocaleData } from '@angular/common';
import {IProduct} from '../product/productinterface';
import localeFr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from '../pipes/filter.by.name.pipe';
import {SortByPricePipe} from '../pipes/sort-by-price.pipe';
import { RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';
import { Data } from '../services/data';

registerLocaleData (localeFr,'fr');
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByNamePipe,SortByPricePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductsService, DataService],
})
export class HomeComponent implements OnInit {
  public products: IProduct[] = [];
  productService: ProductsService = inject(ProductsService);

  searchText: string ='';


  dataService: DataService = inject(DataService);
  data !: Data | undefined;
  
  constructor(public productsService: ProductsService){
    this.data = this.dataService.getDataById("1");
  };

  ngOnInit(): void {
      this.products = this.productsService.getProducts();
  }

  orderBy: "asc" | "desc" = "asc";
}
