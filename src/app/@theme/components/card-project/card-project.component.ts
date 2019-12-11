import { Component, Input } from '@angular/core';
import { Project } from '../../../@core/models';
import { InsightsService } from '../../../@core/services';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {

  @Input() project: Project;

  constructor(
    private insightsService: InsightsService,
  ) { }

  track(informationType: string) {
    this.insightsService.trackEvent(
      'card-project-click', { project: this.project.ID, informationType }
    );
  }

}
