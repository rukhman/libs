import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviewBtnDirective } from '../directives/preview-btn.directive';
import { PreviewGalleryComponent } from './preview-gallery.component';



@NgModule({
  declarations: [
    PreviewGalleryComponent,
    PreviewBtnDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PreviewGalleryComponent,
    PreviewBtnDirective
  ]
})
export class PreviewGalleryModule { }
