import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen1TableComponent } from './screen1-table.component';

describe('Screen1TableComponent', () => {
  let component: Screen1TableComponent;
  let fixture: ComponentFixture<Screen1TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen1TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen1TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
