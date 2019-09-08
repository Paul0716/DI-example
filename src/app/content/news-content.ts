import { Content } from './content.abstract';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsContent extends Content {
  // tslint:disable-next-line:max-line-length
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere urna a vestibulum lacinia. Praesent quis congue sapien, ut tristique sapien. Etiam ornare congue massa, nec facilisis leo. Quisque condimentum accumsan pretium. Vestibulum pretium, ex vitae ultrices posuere, ex orci tempor nunc, at pellentesque odio purus quis dolor. Donec molestie eros aliquet eros lobortis, eget pretium dui ullamcorper. Cras condimentum ultricies iaculis. Mauris turpis risus, consequat in ante et, imperdiet ultrices felis.';
  constructor() {
    super();
  }

  getContent(): string {
    return this.content;
  }

}
