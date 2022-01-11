import { PhotoListComponent } from './photo-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from '../../shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from '../../shared/components/photo-board/test/build-photo-list';
import { of } from 'rxjs';

describe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhotoListModule, HttpClientModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should display board when data arrives`, () => {
    const photos = buildPhotoList();

    spyOn(service, 'getPhotos')
      .and.returnValue(of(photos));

    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board)
      .withContext(`should display board`)
      .not.toBe(null);

    expect(loader)
      .withContext(`should not display loader`)
      .toBe(null);
  });

  it(`should display loader while waiting for data`, () => {
    spyOn(service, 'getPhotos')
      .and.returnValue(of(null));

    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board)
      .withContext(`should not display loader`)
      .toBe(null);

    expect(loader)
      .withContext(`should not display board`)
      .not.toBe(null);
  });
});
