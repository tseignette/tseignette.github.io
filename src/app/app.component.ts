import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { INFORMATION } from './@core/INFORMATION.constants';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
    public router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle(`${INFORMATION.name} / ${INFORMATION.job}`);
  }

}
