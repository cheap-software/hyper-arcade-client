import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeScreenComponent } from './tic-tac-toe-screen.component';

describe('TicTacToeScreenComponent', () => {
  let component: TicTacToeScreenComponent;
  let fixture: ComponentFixture<TicTacToeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicTacToeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
