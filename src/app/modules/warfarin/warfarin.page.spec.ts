import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarfarinPage } from './warfarin.page';

describe('WarfarinPage', () => {
  let component: WarfarinPage;
  let fixture: ComponentFixture<WarfarinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarfarinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarfarinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
