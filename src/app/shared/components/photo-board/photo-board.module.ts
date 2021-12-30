import { NgModule } from '@angular/core';
import { PhotoFrameModule } from '../../photo-frame/photo-frame.module';
import { CommonModule } from '@angular/common';
import { PhotoBoardComponent } from './photo-board.component';

@NgModule({
  declarations: [ PhotoBoardComponent ],
  imports: [
    CommonModule,
    PhotoFrameModule
  ],
  exports: []
})
export class PhotoBoardModule {
}
