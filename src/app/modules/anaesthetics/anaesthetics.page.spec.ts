import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaestheticsPage } from './anaesthetics.page';

describe('AnaestheticsPage', () => {
  let component: AnaestheticsPage;
  let fixture: ComponentFixture<AnaestheticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaestheticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaestheticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
