import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Me } from '../@core/models';
import { PROJECTS } from './projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private toggleSwitchFormSub: Subscription;

  me = Me;

  projects = PROJECTS;

  toggleSwitchForm = new FormControl();

  constructor() { }

  ngOnInit() {
    this.toggleSwitchFormSub = this.toggleSwitchForm.valueChanges.subscribe(() => {
      console.log('Toggle switch value has changed to:', this.toggleSwitchForm.value);
    });
  }

  ngOnDestroy() {
    if (this.toggleSwitchFormSub) {
      this.toggleSwitchFormSub.unsubscribe();
    }
  }

  ouch() {
    console.log('Ouch!');
  }

}
