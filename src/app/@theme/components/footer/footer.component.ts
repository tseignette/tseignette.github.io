import { Component, HostBinding } from '@angular/core';
import { INFORMATION } from '../../../@core/INFORMATION.constants';
import { PAGES } from 'src/app/@core/PAGES.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @HostBinding('class')
  readonly hostClass = 'bg-dark';

  readonly PAGES = PAGES;

  readonly name = INFORMATION.name;

  readonly now = new Date().getFullYear();

  constructor() { }

}
