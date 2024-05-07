import { Injectable } from '@angular/core';
import { IProduct } from '../product/productinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public getProducts(): IProduct [] {
    return [
      {id: 1, name: 'Chaudron', description:'Chaudron en inox', price:20.99, image:'assets/image/chaudron.jpg'},
      {id: 2, name: 'Glaive', description:'Glaive forgé par un artisan', price:22.5, image: 'assets/image/glaive-bouclier.jpg'},
      {id: 3, name: 'Bouclier', description:'Bouclier en bois incrusté', price:18.99, image: 'assets/image/glaive-bouclier.jpg'},
      {id: 4, name: 'Serpe', description:'Serpe de druide', price:30.25, image: 'assets/image/serpe.jpg'},
      {id: 5, name: 'Arc', description:'Arc en bois de chêne', price:25, image: 'assets/image/arc.jpg'},
      {id: 7, name: 'Menhir', description: 'Menhir à venir chercher sur place', price:20, image: 'assets/image/menhir.jpg'},
    
    ]
  }
  

  constructor() { }
}
