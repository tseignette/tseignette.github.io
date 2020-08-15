import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

}
