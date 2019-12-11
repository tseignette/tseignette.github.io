import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { INFORMATION } from '../../../INFORMATION';
import { InsightsService } from '../../../@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private langFormSub: Subscription;

  contactDialogOpen = false;

  info = INFORMATION;

  langForm = new FormControl();

  constructor(
    private insightsService: InsightsService,
  ) { }

  ngOnInit() {
    this.langFormSub = this.langForm.valueChanges.subscribe(() => {
      console.log('TODO: handle i18n');
    });
  }

  ngOnDestroy() {
    if (this.langFormSub) {
      this.langFormSub.unsubscribe();
    }
  }

  openContact() {
    this.contactDialogOpen = true;
    this.insightsService.trackEvent('header-open-contact');
  }

}
