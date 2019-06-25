import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcedureService } from 'src/app/dataServices/procedures.service';
import { Module } from '../module';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-success-rates',
  templateUrl: './success-rates.page.html',
  styleUrls: ['./success-rates.page.scss'],
})
export class SuccessRatesPage extends Module implements OnInit {
  @ViewChild(IonSearchbar) searchBar: IonSearchbar;

  procedureList = this.procedureService.getProcedures();

  constructor(private procedureService: ProcedureService) {
    super('success-rates');
  }

  ngOnInit() {
    // Adds procedure types to filters[] under 'Field'
    for (const procedureType of new Set(this.procedureList.map(procedure => procedure.type))) {
      this.addToFilter('Field', procedureType);
    }
    this.sortArrayByProperty(this.procedureList, 'name');
  }

  updateFilter() {
    for (const procedure of this.procedureList) {
      // Hide if searchbar does not match a procedure name
      if (this.searchBar.value && !procedure.name.toLowerCase().includes(this.searchBar.value.toLowerCase())) {
        procedure.hide = true;
      } else {
        // If the category is unticked, hide procedures of that category (unless already hidden)
        procedure.hide = !this.shownInFilter('Field', procedure.type);
      }
    }
  }
}
