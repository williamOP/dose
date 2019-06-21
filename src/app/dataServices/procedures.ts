import { Injectable } from '@angular/core';

interface ProcedureStat {
    type: 'Survival' | 'Success';
    years: number;
    percentage: number;
    note ?: string;
}

interface Procedure {
    name: string;                                          // procedure name
    type: 'Prosthodontics' | 'Endodontics';               // field
    procedureStats?: ProcedureStat[];
    procedureStatNote?: string;
}

const procedureList: Procedure[] = [
    {
        name: 'Resin Bonded Bridge',
        type: 'Prosthodontics',
        procedureStats: [
            {type: 'Survival', years: 5, percentage: 83.6},
            {type: 'Survival', years: 10, percentage: 64.9}
        ],
        procedureStatNote: `Debonding of the restoration (78%) is the most common
        type of failure with RRBs followed by porcelain fracture (13%).`
    },
    {
        name: 'Root Canal Treatment',
        type: 'Endodontics',
    },
    {
        name: 'Retreatment',
        type: 'Endodontics',
    },
    {
        name: 'Onlay',
        type: 'Prosthodontics',
    }
];

@Injectable({providedIn: 'root'})
export class ProcedureService {

  constructor() { }

  getProcedures() {
    return procedureList;
  }
}
