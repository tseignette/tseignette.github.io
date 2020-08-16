import { Component } from '@angular/core';
import { INFORMATION } from '../@core/INFORMATION.constants';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  readonly INFORMATION = INFORMATION;

  constructor() { }

}
