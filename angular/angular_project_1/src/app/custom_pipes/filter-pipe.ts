import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(employees: Array<any>, searchText: string) {
    if (!searchText) return employees;
    if (!employees) return [];

    let filteredData = employees.filter((emp: any) => {
      return emp.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredData;
  }
}
