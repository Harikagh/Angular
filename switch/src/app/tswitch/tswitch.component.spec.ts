import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TswitchComponent } from './tswitch.component';

describe('TswitchComponent', () => {
  let component: TswitchComponent;
  let fixture: ComponentFixture<TswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
