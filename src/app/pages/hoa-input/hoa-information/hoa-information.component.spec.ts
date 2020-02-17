import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaInformationComponent } from './hoa-information.component';

describe('HoaInformationComponent', () => {
  let component: HoaInformationComponent;
  let fixture: ComponentFixture<HoaInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoaInformationComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
