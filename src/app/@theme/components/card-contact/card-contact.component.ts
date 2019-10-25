import { Component, Input } from '@angular/core';
import { Me } from '../../../@core/models';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent {

  @Input() light: boolean;

  me = Me;

  constructor() { }

}
