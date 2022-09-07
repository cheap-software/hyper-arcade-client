import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeMultiplayerScreenComponent } from './snake-multiplayer-screen.component';

describe('SnakeMultiplayerScreenComponent', () => {
  let component: SnakeMultiplayerScreenComponent;
  let fixture: ComponentFixture<SnakeMultiplayerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakeMultiplayerScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakeMultiplayerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
