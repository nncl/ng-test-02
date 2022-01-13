import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class PhotoBoardService {
  constructor(private httpClient: HttpClient) {
  }

  public getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`http://localhost:3000/photos`)
      .pipe(map(photos => {
        return photos.map(photo => {
          return { ...photo, description: photo.description.toUpperCase() };
        });
      }))
      .pipe(delay(2000));
  }
}
