import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { INFORMATION } from './@core/INFORMATION.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`${INFORMATION.name} / ${INFORMATION.job}`);
  }

}
