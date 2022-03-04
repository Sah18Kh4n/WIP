import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen1NavComponent } from './screen1-nav.component';

describe('Screen1NavComponent', () => {
  let component: Screen1NavComponent;
  let fixture: ComponentFixture<Screen1NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen1NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen1NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
