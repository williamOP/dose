import { Component, OnInit } from '@angular/core';
import { ProcedureService } from 'src/app/dataServices/procedures';
import { getModuleMetadata, Module } from '../module';

@Component({
  selector: 'app-success-rates',
  templateUrl: './success-rates.page.html',
  styleUrls: ['./success-rates.page.scss'],
})
export class SuccessRatesPage extends Module implements OnInit {
  procedureList = this.procedureService.getProcedures();

  constructor(private procedureService: ProcedureService) {
    super();
  }

  ngOnInit() {
    this.metadata = getModuleMetadata('success-rates');
  }
}
