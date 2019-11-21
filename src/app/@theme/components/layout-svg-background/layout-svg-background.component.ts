import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-svg-background',
  templateUrl: './layout-svg-background.component.html',
  styleUrls: ['./layout-svg-background.component.scss']
})
export class LayoutSvgBackgroundComponent {

  @Input() myTitle: string;

  @Input() svg: string;

  constructor() { }

}
