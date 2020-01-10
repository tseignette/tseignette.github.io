import { Component, Input } from '@angular/core';
import { PROJECTS } from '../../../PROJECTS';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {

  @Input() preview = false;

  projects = PROJECTS;

  constructor() { }

}
