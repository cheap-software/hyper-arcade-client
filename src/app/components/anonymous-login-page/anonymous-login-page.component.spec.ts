import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousLoginPageComponent } from './anonymous-login-page.component';

describe('AnonymousLoginPageComponent', () => {
  let component: AnonymousLoginPageComponent;
  let fixture: ComponentFixture<AnonymousLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnonymousLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
