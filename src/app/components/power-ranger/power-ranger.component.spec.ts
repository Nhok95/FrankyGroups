import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerRangerComponent } from './power-ranger.component';

describe('PowerRangerComponent', () => {
  let component: PowerRangerComponent;
  let fixture: ComponentFixture<PowerRangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerRangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerRangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
