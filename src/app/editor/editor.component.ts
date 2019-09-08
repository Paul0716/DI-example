import { Component, OnInit } from '@angular/core';
import { Content } from '../content/content.abstract';
import { CutomizeContent } from '../content/customize-content';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    {
      provide: Content,
      useClass: CutomizeContent
    }
  ]
})
export class EditorComponent implements OnInit {
  text: string;

  constructor(private content: Content) { }

  ngOnInit() {
    this.text = this.content.getContent();
  }

  saveContent(ev: MouseEvent) {
    // console.log(this.text);
    this.content.saveContent(this.text);
  }

}
