import { Component, OnInit, Input, Output } from '@angular/core';
import { Filter } from '../../module';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-filter-popover',
  templateUrl: './filter-popover.component.html',
  styleUrls: ['./filter-popover.component.scss'],
})
export class FilterPopoverComponent implements OnInit {
  @Input() filters: Filter[];
  filterCategories: Set<string>;

  constructor() { }

  ngOnInit() {
    this.filterCategories = new Set(this.filters.map(filter => filter.category));
  }
}
