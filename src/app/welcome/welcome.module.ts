import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { TextModule } from '../text/text.module';
import { NewsContent } from '../content/news-content';
import { Content } from '../content/content.abstract';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    TextModule,
  ],
  providers: [
    // {
    //   provide: Content,
    //   useClass: NewsContent
    // }
  ],
  exports: [WelcomeComponent],
})
export class WelcomeModule { }
