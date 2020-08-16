import { Component, HostBinding, Inject, LOCALE_ID } from '@angular/core';
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

  readonly INFORMATION = INFORMATION;

  readonly PAGES = PAGES;

  readonly now = new Date().getFullYear();

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

}
