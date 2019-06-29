import { Component, OnInit, Input } from '@angular/core';
import { Filter, SortByItem, Module } from '../../module';

@Component({
  selector: 'app-filter-popover',
  templateUrl: './filter-popover.component.html',
  styleUrls: ['./filter-popover.component.scss'],
})
export class FilterPopoverComponent implements OnInit {
  @Input() sortByList: SortByItem[];
  @Input() filters: Filter[];
  @Input() module: Module;
  filterCategories: Set<string>;

  constructor() { }

  ngOnInit() {
    this.filterCategories = new Set(this.filters.map(filter => filter.category));
    this.filters.sort((a, b) => a.name.localeCompare(b.name));
  }

  updateModule() {
    this.module.updateFilter();
  }
}
