// Testing tool for module viewer and serves as documentation on its use.
import { Component, OnInit } from '@angular/core';
import { ProcedureService } from 'src/app/dataServices/procedures.service';
import { Module } from '../module';

@Component({
  selector: 'app-testing-module',
  templateUrl: './testing-module.page.html',
  styleUrls: ['./testing-module.page.scss'],
})
export class TestingModulePage extends Module implements OnInit {
  referenceDescription: string;
  referenceReferenceName: string;
  referenceLink: string;

  filterCategory: string;
  filterName: string;
  filterShown: boolean;

  sortByPropertyName: string;
  sortByDisplayName: string;
  sortByActive: boolean;

  constructor(private procedureService: ProcedureService) {
    super('test');
  }

  ngOnInit() {
  }

  addReference() {
    if (!this.metadata.references) {
      this.metadata.references = [];
    }
    this.metadata.references.push(
      {description: this.referenceDescription,
        referenceName: this.referenceReferenceName,
        link: this.referenceLink});
  }

  addFilter() {
    this.addToFilter(this.filterCategory, this.filterName, this.filterShown);
  }

  addSortBy() {
    this.addToSortByList(this.sortByPropertyName, this.sortByDisplayName, this.sortByActive);
  }
}
