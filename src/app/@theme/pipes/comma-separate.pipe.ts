import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngCommaSeparate'
})
export class CommaSeparatePipe implements PipeTransform {

  transform(value: []): string {
    if (!value) {
      return '';
    }

    return value.join(', ');
  }

}
