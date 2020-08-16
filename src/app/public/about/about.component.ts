import { Component, Inject, LOCALE_ID } from '@angular/core';
import { INFORMATION } from 'src/app/@core/INFORMATION.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  readonly INFORMATION = INFORMATION;

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

}
