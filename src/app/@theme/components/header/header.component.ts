import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { INFORMATION } from '../../../INFORMATION';

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
