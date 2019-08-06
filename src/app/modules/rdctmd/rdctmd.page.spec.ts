import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdctmdPage } from './rdctmd.page';

describe('RdctmdPage', () => {
  let component: RdctmdPage;
  let fixture: ComponentFixture<RdctmdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdctmdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdctmdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
