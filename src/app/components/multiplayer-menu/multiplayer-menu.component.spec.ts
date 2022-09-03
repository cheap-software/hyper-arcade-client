import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerMenuComponent } from './multiplayer-menu.component';

describe('MultiplayerMenuComponent', () => {
  let component: MultiplayerMenuComponent;
  let fixture: ComponentFixture<MultiplayerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
