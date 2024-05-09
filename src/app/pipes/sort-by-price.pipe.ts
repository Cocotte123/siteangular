import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from '../product/productinterface';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(value: IProduct[], order: "asc" | "desc" = "asc"): IProduct[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }

}
