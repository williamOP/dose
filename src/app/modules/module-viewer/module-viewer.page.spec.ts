import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleViewerPage } from './module-viewer.page';

describe('ModuleViewerPage', () => {
  let component: ModuleViewerPage;
  let fixture: ComponentFixture<ModuleViewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleViewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
