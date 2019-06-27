import { Injectable } from '@angular/core';

interface ProcedureStat {
    type: 'Survival' | 'Success';
    years: number;
    percentage: number;
    note ?: string;
}

interface Procedure {
    name: string;                                          // procedure name
    type: 'Prosthodontics' | 'Endodontics' |
    'Conservative Dentistry';                              // field
    procedureStats?: ProcedureStat[];
    procedureStatNote?: string;
    hide?: boolean;
}

const procedureList: Procedure[] = [
    {
        name: 'Resin bonded bridge',
        type: 'Prosthodontics',
        procedureStats: [
            {type: 'Survival', years: 5, percentage: 83.6},
            {type: 'Survival', years: 10, percentage: 64.9}
        ],
        procedureStatNote: `Debonding of the restoration (78%) is the most common
        type of failure followed by porcelain fracture (13%).`
    },
    {
        name: 'Implant',
        type: 'Prosthodontics',
        procedureStats: [
            {type: 'Survival', years: 10, percentage: 96.4}
        ]
    },
    {
        name: 'Root canal treatment',
        type: 'Endodontics',
    },
    {
        name: 'Retreatment',
        type: 'Endodontics',
    },
    {
        name: 'Onlay',
        type: 'Prosthodontics',
    },
    {
        name: 'Crown',
        type: 'Prosthodontics',
    },
    {
        name: 'Periradicular surgery',
        type: 'Endodontics',
    },
    {
        name: 'Bridge',
        type: 'Prosthodontics',
    },
    {
        name: 'Resin composite restoration',
        type: 'Conservative Dentistry',
    },
    {
        name: 'Amalgam restoration',
        type: 'Conservative Dentistry',
    },
    {
        name: 'Glass ionomer restoration',
        type: 'Conservative Dentistry',
    },
    {
        name: 'Fissure sealant',
        type: 'Conservative Dentistry',
    },
];

@Injectable({providedIn: 'root'})
export class ProcedureService {

  constructor() { }

  getProcedures(): Procedure[] {
    return procedureList;
  }
}
