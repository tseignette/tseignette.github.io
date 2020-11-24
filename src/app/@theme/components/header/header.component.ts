import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CoreConstants } from '../../../@core/core.constants';
import { INFORMATION } from '../../../@core/INFORMATION.constants';
import { PAGES } from '../../../@core/PAGES.constants';
import { InsightsService } from 'src/app/@core/services';

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
    @Inject(LOCALE_ID) public currentLocale: string,
    private insightsService: InsightsService
  ) { }

  toggleModal(): void {
    this.isModalActive = !this.isModalActive;

    if (this.isModalActive) {
      this.insightsService.trackEvent('header-open-contact');
    }
  }

  trackI18n(selectedLocale): void {
    this.insightsService.trackEvent('i18n', { selectedLocale });
  }

}
