import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgroupsComponent } from './showgroups.component';

describe('ShowgroupsComponent', () => {
  let component: ShowgroupsComponent;
  let fixture: ComponentFixture<ShowgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
