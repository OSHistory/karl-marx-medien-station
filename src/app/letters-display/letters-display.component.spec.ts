import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersDisplayComponent } from './letters-display.component';

describe('LettersDisplayComponent', () => {
  let component: LettersDisplayComponent;
  let fixture: ComponentFixture<LettersDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
