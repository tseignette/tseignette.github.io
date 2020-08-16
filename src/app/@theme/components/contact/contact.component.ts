import { Component, OnInit, Input, HostBinding, Inject, LOCALE_ID } from '@angular/core';
import { INFORMATION } from 'src/app/@core/INFORMATION.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @HostBinding('class')
  hostClass: string;

  @Input() light = false;

  readonly INFORMATION = INFORMATION;

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

  ngOnInit(): void {
    this.hostClass = this.light ? 'light' : 'dark';
  }

}
