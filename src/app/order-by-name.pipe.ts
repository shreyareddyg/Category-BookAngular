import { Pipe, PipeTransform } from '@angular/core';
import {  Category } from './myservive.service';

@Pipe({
  name: 'orderByName'
})
export class OrderByNamePipe implements PipeTransform {


  transform(value: Category[], ...args: any[]): any {
    console.log("value", value);
    return value.sort((a,b) => {
       let x =a.categoryName.toLowerCase();
       let y =b.categoryName.toLowerCase();
  
      if(x<y){
      return -1;}
      else{
      return 1;
    }
    
  });
  }
  
}
