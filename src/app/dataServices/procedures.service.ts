import { Injectable } from '@angular/core';

interface ProcedureStat {
    type: 'Survival' | 'Success';
    years: number;
    percentage: number;
    note ?: string;
    hide ?: boolean;
}

interface Procedure {
    name: string;                                          // procedure name
    type: 'Prosthodontics' | 'Endodontics' |
    'Conservative Dentistry' | 'Oral Surgery';             // field
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
    // {
    //     name: 'Root canal treatment',
    //     type: 'Endodontics',
    // },
    // {
    //     name: 'Retreatment',
    //     type: 'Endodontics',
    // },
    // {
    //     name: 'Onlay',
    //     type: 'Prosthodontics',
    // },
    {
        name: 'Crown',
        type: 'Prosthodontics',
        procedureStats: [
            {type: 'Survival', years: 1, percentage: 93},
            {type: 'Survival', years: 5, percentage: 77},
            {type: 'Survival', years: 10, percentage: 63},
            {type: 'Survival', years: 15, percentage: 53}
        ]
    },
    // {
    //     name: 'Periradicular surgery',
    //     type: 'Endodontics',
    // },
    // {
    //     name: 'Bridge',
    //     type: 'Prosthodontics',
    // },
    {
        name: 'Resin composite restoration',
        type: 'Conservative Dentistry',
        procedureStats: [
            {type: 'Survival', years: 1, percentage: 87},
            {type: 'Survival', years: 5, percentage: 59},
            {type: 'Survival', years: 10, percentage: 43},
            {type: 'Survival', years: 15, percentage: 34}
        ]
    },
    {
        name: 'Amalgam restoration',
        type: 'Conservative Dentistry',
        procedureStats: [
            {type: 'Survival', years: 1, percentage: 91},
            {type: 'Survival', years: 5, percentage: 66},
            {type: 'Survival', years: 10, percentage: 51},
            {type: 'Survival', years: 15, percentage: 41}
        ]
    },
    {
        name: 'Glass ionomer restoration',
        type: 'Conservative Dentistry',
        procedureStats: [
            {type: 'Survival', years: 1, percentage: 84},
            {type: 'Survival', years: 5, percentage: 53},
            {type: 'Survival', years: 10, percentage: 37},
            {type: 'Survival', years: 15, percentage: 28}
        ]
    },
    // {
    //     name: 'Fissure sealant',
    //     type: 'Conservative Dentistry',
    // },
    {
        name: 'Autotransplantation',
        type: 'Oral Surgery',
        procedureStats: [
            {type: 'Survival', years: 5, percentage: 95},
            {type: 'Survival', years: 10, percentage: 94},
            {type: 'Survival', years: 15, percentage: 88}
        ]
    }
];

@Injectable({providedIn: 'root'})
export class ProcedureService {

  constructor() { }

  getProcedures(): Procedure[] {
    return procedureList;
  }
}
