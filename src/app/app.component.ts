import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CoreUtils } from './@core/core.utils';
import { INFORMATION } from './@core/INFORMATION.constants';
import { PAGES } from './@core/PAGES.constants';
import { InsightsService } from './@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({ display: 'block', opacity: 0 }),
              animate('0.3s ease', style({ opacity: 1 })),
            ],
            { optional: true }
          )
        ]),
      ]),
    ]),
  ]
})
export class AppComponent {

  constructor(
    private insightsService: InsightsService,
    private metaService: Meta,
    public router: Router,
    private titleService: Title
  ) {
    this.insightsService.init();

    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const item = PAGES.find(page => page.routerLink === event.url);

        if (item) {
          this.updateDescription(item.description);
          this.updateTitle(item.label);
        }
        else {
          this.updateDescription();
          this.updateTitle();
        }
      });
  }

  private updateDescription(description?: null | string): void {
    if (description === null) {
      this.metaService.removeTag('name=description');
    }
    else {
      this.metaService.updateTag({
        content: description || CoreUtils.stripHTMLTags(INFORMATION.description),
        name: 'description'
      });
    }
  }

  private updateTitle(label?: string): void {
    const items = [`${INFORMATION.name} / ${INFORMATION.job}`];

    if (label) {
      items.unshift(label);
    }

    this.titleService.setTitle(items.join(' • '));
  }

}
