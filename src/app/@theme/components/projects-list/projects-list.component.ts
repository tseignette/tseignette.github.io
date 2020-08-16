import { Component, Input } from '@angular/core';
import { PROJECTS } from '../../../@core/PROJECTS.constants';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {

  @Input() limit: number;

  readonly PROJECTS = PROJECTS;

  constructor() { }

}
