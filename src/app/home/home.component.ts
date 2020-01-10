import { Component } from '@angular/core';
import { INFORMATION } from '../INFORMATION';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  info = INFORMATION;

  constructor() { }

}
