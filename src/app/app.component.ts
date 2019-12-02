import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { INFORMATION } from './INFORMATION';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, animateChild, group } from '@angular/animations';

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

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.titleService.getTitle() + ' ' + INFORMATION.name);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
