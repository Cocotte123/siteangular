import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(value: any, filterProduct:string):any {
    
      return value.filter((e: any) => {
        return e.name.toLowerCase().indexOf(filterProduct)>-1;
      });
    }
 

  }


