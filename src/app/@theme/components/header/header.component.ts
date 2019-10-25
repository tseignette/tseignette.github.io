import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Me } from '../../../@core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private langFormSub: Subscription;

  contactDialogOpen = false;

  langForm = new FormControl();

  me = Me;

  constructor() { }

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
  }

}
