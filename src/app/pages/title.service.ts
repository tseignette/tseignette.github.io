import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title: string;

  onTitleUpdate = new Subject<string>();

  constructor() { }

  setTitle(title: string) {
    this.title = title;
    this.onTitleUpdate.next(this.title);
  }

  getTitle(): string {
    return this.title;
  }

}
