import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindcComponent } from './bindc.component';

describe('BindcComponent', () => {
  let component: BindcComponent;
  let fixture: ComponentFixture<BindcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
