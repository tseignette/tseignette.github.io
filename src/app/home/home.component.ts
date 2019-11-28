import { Component } from '@angular/core';
import { INFORMATION } from '../INFORMATION';
import { PROJECTS } from '../PROJECTS';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  info = INFORMATION;

  projects = PROJECTS;

  constructor() { }

}
