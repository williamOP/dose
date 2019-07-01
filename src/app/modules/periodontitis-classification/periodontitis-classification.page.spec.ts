import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodontitisClassificationPage } from './periodontitis-classification.page';

describe('PeriodontitisClassificationPage', () => {
  let component: PeriodontitisClassificationPage;
  let fixture: ComponentFixture<PeriodontitisClassificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodontitisClassificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodontitisClassificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
