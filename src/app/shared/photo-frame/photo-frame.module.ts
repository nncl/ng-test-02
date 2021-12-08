import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetModule } from '../components/like-widget/like-widget.module';
import { PhotoFrameComponent } from './photo-frame.component';

@NgModule({
  declarations: [ PhotoFrameComponent ],
  imports: [
    CommonModule,
    LikeWidgetModule
  ],
  exports: [ PhotoFrameComponent ]
})
export class PhotoFrameModule {
}
