import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGrid]',
})
export class GridDirective {

  @HostBinding('class')
  readonly hostClass = 'container grid-md';

  constructor() { }

}
