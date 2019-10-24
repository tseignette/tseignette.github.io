import { Component } from '@angular/core';
import { Me } from '../../../@core/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  me = Me;

  constructor() { }

}
