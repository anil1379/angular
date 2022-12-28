import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'techlife'
})
export class TechlifePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    return   value + " is my tech life"
    return null;
  }

}
  