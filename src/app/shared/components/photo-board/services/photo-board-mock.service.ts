import { PhotoBoardService } from './photo-board.service';
import { Observable, of } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { buildPhotoList } from '../test/build-photo-list';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
