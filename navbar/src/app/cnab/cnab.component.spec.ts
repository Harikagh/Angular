import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnabComponent } from './cnab.component';

describe('CnabComponent', () => {
  let component: CnabComponent;
  let fixture: ComponentFixture<CnabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
