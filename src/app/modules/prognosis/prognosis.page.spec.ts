import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognosisPage } from './prognosis.page';

describe('PrognosisPage', () => {
  let component: PrognosisPage;
  let fixture: ComponentFixture<PrognosisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrognosisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrognosisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
