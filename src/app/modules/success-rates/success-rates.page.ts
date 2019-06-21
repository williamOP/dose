import { Component, OnInit } from '@angular/core';
import { Procedure, ProcedureService } from 'src/app/dataServices/procedures';
import { getModuleData, Module } from '../moduleLibrary';

@Component({
  selector: 'app-success-rates',
  templateUrl: './success-rates.page.html',
  styleUrls: ['./success-rates.page.scss'],
})
export class SuccessRatesPage extends Module implements OnInit {
  procedureList: Procedure[];

  constructor(private procedureService: ProcedureService) {
    super();
  }

  ngOnInit() {
    this.moduleData = getModuleData('success-rates');
    this.procedureList = this.procedureService.getProcedures();
  }
}
