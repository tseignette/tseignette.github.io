import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { INFORMATION } from './INFORMATION';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { InsightsService } from './@core/services';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ display: 'block', opacity: 0 }),
          animate('0.4s ease', style({ opacity: 1 }))
        ],
        { optional: true }
      ),
    ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent implements OnInit {

  private landingRoutePath: string;

  private animationAreEnabled = false;

  constructor(
    private insightsService: InsightsService,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.insightsService.init();
    this.titleService.setTitle('Portfolio / ' + INFORMATION.name);
  }

  /**
   * Animation is disabled on landing page to avoid flickering effect due to SSR
   */
  prepareRoute(outlet: RouterOutlet) {
    // Return if RouterOutlet isn't ready
    if (!outlet.isActivated) return false;

    // Set landing route path
    if (this.landingRoutePath === undefined) this.landingRoutePath = outlet.activatedRoute.routeConfig.path;

    // If landing route path != current route path => we have left the landing page and we can enable animations
    if (this.landingRoutePath !== outlet.activatedRoute.routeConfig.path) this.animationAreEnabled = true;

    return this.animationAreEnabled && outlet.activatedRoute;
  }

}
