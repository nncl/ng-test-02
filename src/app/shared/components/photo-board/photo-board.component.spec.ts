import { PhotoBoardComponent } from './photo-board.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardModule } from './photo-board.module';
import { Photo } from './interfaces/photo';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];

  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: ''
    });
  }

  return photos;
}

describe(PhotoBoardComponent.name, () => {
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let component: PhotoBoardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhotoBoardModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it(`should display rows and columns when (@Input photos) has value`, () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();

    expect(component.rows.length)
      .withContext(`Number of rows`)
      .toBe(2);

    expect(component.rows[0].length)
      .withContext(`Number of columns from the first row`)
      .toBe(4);

    expect(component.rows[1].length)
      .withContext(`Number of columns from the first row`)
      .toBe(4);
  });
});
