import { Component, Input } from '@angular/core';
import { INFORMATION } from '../../../INFORMATION';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent {

  @Input() light: boolean;

  info = INFORMATION;

  constructor() { }

}
