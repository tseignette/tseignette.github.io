import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { INFORMATION } from '../INFORMATION';
import { PROJECTS } from '../PROJECTS';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private toggleSwitchFormSub: Subscription;

  info = INFORMATION;

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
