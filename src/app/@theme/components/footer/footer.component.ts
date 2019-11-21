import { Component } from '@angular/core';
import { INFORMATION } from '../../../INFORMATION';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  info = INFORMATION;

  constructor() { }

}
