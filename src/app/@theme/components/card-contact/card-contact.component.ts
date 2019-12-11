import { Component, Input } from '@angular/core';
import { INFORMATION } from '../../../INFORMATION';
import { InsightsService } from '../../../@core/services';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent {

  @Input() light: boolean;

  info = INFORMATION;

  constructor(
    private insightsService: InsightsService,
  ) { }

  track(option: string) {
    this.insightsService.trackEvent('card-contact-click', { option });
  }

}
