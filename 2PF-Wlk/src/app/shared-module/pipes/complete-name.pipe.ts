import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  transform(name: unknown, args?: any): string {
    let complete_name: string = `${args}, ${name}`
    return complete_name;
  }

}
