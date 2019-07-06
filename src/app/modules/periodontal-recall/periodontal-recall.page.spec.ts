import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodontalRecallPage } from './periodontal-recall.page';

describe('PeriodontalRecallPage', () => {
  let component: PeriodontalRecallPage;
  let fixture: ComponentFixture<PeriodontalRecallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodontalRecallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodontalRecallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
