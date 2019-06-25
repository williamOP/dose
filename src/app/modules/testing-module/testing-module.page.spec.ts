import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModulePage } from './testing-module.page';

describe('TestingModulePage', () => {
  let component: TestingModulePage;
  let fixture: ComponentFixture<TestingModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingModulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
