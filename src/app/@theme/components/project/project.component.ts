import { Component, Input } from '@angular/core';
import { Project } from '../../../@core/models';
import { InsightsService } from 'src/app/@core/services';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project: Project;

  displayBody = false;

  constructor(
    private insightsService: InsightsService
  ) { }

  toggleBody(): void {
    this.displayBody = !this.displayBody;

    if (this.displayBody) {
      this.track('details');
    }
  }

  track(option: string): void {
    this.insightsService.trackEvent('project-click', { option, project: this.project.id });
  }

}
