import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImgPreviewComponent } from './input-img-preview.component';

describe('InputImgPreviewComponent', () => {
  let component: InputImgPreviewComponent;
  let fixture: ComponentFixture<InputImgPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputImgPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputImgPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
