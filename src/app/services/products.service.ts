import { Injectable } from '@angular/core';
import { IProduct } from '../product/productinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public getProducts(): IProduct [] {
    return [
      {id: 1, name: 'Chaudron', description:'Chaudron en inox', price:20, image:'../../image/chaudron.jpg'},
      {id: 2, name: 'Glaive', description:'Glaive', price:22, image: '../../image/glaive-bouclier.jpg'},
      {id: 3, name: 'Bouclier', description:'Bouclier', price:18, image: '../../image/glaive-bouclier.jpg'},
      {id: 4, name: 'Serpe', description:'Serpe', price:30, image: '../../image/serpe.jpg'},
      {id: 5, name: 'Arc', description:'Arc', price:25, image: '../../image/arc.jpg'},
      {id: 7, name: 'Menhir', description: 'Menhir', price:20, image: '../../image/menhir.jpg'},
    
    ]
  }
  

  constructor() { }
}
