import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CoreConstants } from '../../../@core/core.constants';
import { INFORMATION } from '../../../@core/INFORMATION.constants';
import { PAGES } from '../../../@core/PAGES.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  readonly PAGES = PAGES;

  readonly locales = CoreConstants.locales;

  readonly name = INFORMATION.name;

  isModalActive = false;

  constructor(
    @Inject(LOCALE_ID) public currentLocale: string
  ) { }

  toggleModal(): void {
    this.isModalActive = !this.isModalActive;
  }

}
