import { Component, OnInit } from '@angular/core';
import { Content } from '../content/content.abstract';
import { NewsContent } from '../content/news-content';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [
    {
      provide: Content,
      useClass: NewsContent
    }
  ]
})
export class WelcomeComponent implements OnInit {
  welcome: string

  constructor(private content: Content) { }

  ngOnInit() {
    this.welcome = this.content.getContent();
  }

}
