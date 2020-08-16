import { Component, Input } from '@angular/core';
import { Project } from '../../../@core/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project: Project;

  displayBody = false;

  constructor() { }

  toggleBody(): void {
    this.displayBody = !this.displayBody;
  }

}
