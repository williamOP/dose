import { Component, OnInit } from '@angular/core';
import { ProcedureService } from 'src/app/dataServices/procedures.service';
import { Module } from '../module';

@Component({
  selector: 'app-success-rates',
  templateUrl: './success-rates.page.html',
  styleUrls: ['./success-rates.page.scss'],
})
export class SuccessRatesPage extends Module implements OnInit {
  procedureList = this.procedureService.getProcedures();
  yearsFilters: number[] = [5, 10];

  constructor(private procedureService: ProcedureService) {
    super('success-rates');
  }

  ngOnInit() {
    // Adds procedure types to filters[] under 'Field'
    for (const procedureType of new Set(this.procedureList.map(procedure => procedure.type))) {
      this.addToFilter('Field', procedureType);
    }
    // Add duration to filters
    for (const years of this.yearsFilters) {
      this.addToFilter('Years', years.toString());
    }
    this.addToFilter('Years', 'Other', false);

    // Sort by procedure or field
    this.addToSortByList('name', 'Procedure Name', true);
    this.addToSortByList('type', 'Field');

    // Create searchbar
    this.searchbarPlaceholder = 'Filter procedures';
  }

  updateFilter() {
    // Sort Array
    this.sortArrayByProperty(this.procedureList, this.getSortByProperty());

    for (const procedure of this.procedureList) {
      // Hide if searchbar does not match a procedure name
      if (this.searchbarText && !procedure.name.toLowerCase().includes(this.searchbarText.toLowerCase())) {
        procedure.hide = true;
      } else {
        // If the category is unticked, hide procedures of that category (unless already hidden)
        procedure.hide = !this.shownInFilter('Field', procedure.type);
      }

      // Hide procedure stat if filtered out
      if (procedure.procedureStats) {
        for (const procedureStat of procedure.procedureStats) {
          if (this.yearsFilters.includes(procedureStat.years)) {
            procedureStat.hide = !this.shownInFilter('Years', procedureStat.years.toString());
          } else {
            procedureStat.hide = !this.shownInFilter('Years', 'Other');
          }
        }
      }
    }
  }
}
