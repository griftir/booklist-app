import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    return (value as Array<Object>).filter(book =>
      book[propName].includes(filterString)
    );
  }
}
