import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlayerMenuComponent } from './one-player-menu.component';

describe('OnePlayerMenuComponent', () => {
  let component: OnePlayerMenuComponent;
  let fixture: ComponentFixture<OnePlayerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePlayerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePlayerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
