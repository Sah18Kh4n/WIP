import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter30MinutesComponent } from './counter30-minutes.component';

describe('Counter30MinutesComponent', () => {
  let component: Counter30MinutesComponent;
  let fixture: ComponentFixture<Counter30MinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Counter30MinutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter30MinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
