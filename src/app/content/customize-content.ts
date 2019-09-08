import { Content } from './content.abstract';
import { Injectable } from '@angular/core';

@Injectable()
export class CutomizeContent extends Content {
  content = "this is customize content class.";

  constructor() {
    super();
  }

  getContent(): string {
    return this.content;
  }
}
