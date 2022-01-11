import { PhotoListComponent } from './photo-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from '../../shared/components/photo-board/services/photo-board.service';

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
    // TODO
  });
});
