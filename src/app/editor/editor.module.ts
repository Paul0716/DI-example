import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextModule } from '../text/text.module';
import { EditorComponent } from './editor.component';
import { Content } from '../content/content.abstract';
import { CutomizeContent } from '../content/customize-content';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    TextModule,
    FormsModule,
  ],
  providers: [
    // {
    //   provide: Content,
    //   useClass: CutomizeContent
    // }
  ],
  exports: [
    EditorComponent,
  ]
})
export class EditorModule { }
