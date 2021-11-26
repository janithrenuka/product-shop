// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchPhone search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchPhone: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchPhone) {
      return items;
    }
    searchPhone = searchPhone.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchPhone);
    });
  }
}