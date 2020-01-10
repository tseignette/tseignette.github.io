import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService } from './title.service';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('titleAnimations', [
      transition('* <=> *', [
        style({ width: '0', overflow: 'hidden', whiteSpace: 'nowrap' }),
        animate('0.3s', style({ width: '100%' })),
      ]),
    ]),
  ]
})
export class PagesComponent implements OnInit, OnDestroy {

  private onTitleUpdateSub: Subscription;

  title: string;

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.onTitleUpdateSub = this.titleService.onTitleUpdate.subscribe(title => this.updateTitle(title));
  }

  ngOnDestroy() {
    if (this.onTitleUpdateSub) {
      this.onTitleUpdateSub.unsubscribe();
    }
  }

  private updateTitle(title: string) {
    this.title = title;
  }

}
