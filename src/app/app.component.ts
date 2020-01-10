import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { INFORMATION } from './INFORMATION';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition, query, style, animate, animateChild, group } from '@angular/animations';
import { InsightsService } from './@core/services';
import { filter } from 'rxjs/operators';

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
              animate('0.5s ease', style({ opacity: 1 })),
            ],
            { optional: true }
          ),
          query('@titleAnimations', animateChild(), { optional: true })
        ]),
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {

  @HostBinding('@.disabled')
  private areAnimationDisabled = true;

  private nbNavigation = 0;

  url: string;

  constructor(
    private insightsService: InsightsService,
    private titleService: Title,
    private router: Router,
  ) { }

  ngOnInit() {
    this.insightsService.init();
    this.titleService.setTitle('Portfolio / ' + INFORMATION.name);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Keeping url up to date to trigger routeAnimations
      this.url = this.router.url;

      // Disabling animations on landing page to avoid flickering effect due to SSR
      if (this.nbNavigation < 2) {
        this.nbNavigation++;

        if (this.nbNavigation === 2) this.areAnimationDisabled = false;
      }
    });
  }

}
