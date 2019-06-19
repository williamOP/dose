export class Drug {
    type: string;               // type of drug
    name: string;               // drug name
    maxMgPerKg: number;         // maxiumum mg of drug per kg lean mass
    maxMgPerKgUpper?: number;   // upper limit of maxiumum mg of drug per kg lean mass
    percentage?: number;        // percentage of LA in carpule
    carpuleException?: number;  // strict maximum number of carpules
    exception?: string;         // exception message
    doseFrequency?: string;     // frequency of dose written as 'x-y time'
    maxDoseForPeriod?: number;  // maximum dose per doseFrequency
    hide?: boolean;             // flag for filter
}

export const drugList: Drug[] = [
    {
        type: 'Local Anaesthetic',
        name: '2% Lignocaine Plain',
        percentage: 2,
        maxMgPerKg: 4.4
    },
    {
        type: 'Local Anaesthetic',
        name: '2% Lignocaine 1:80000 Adrenaline',
        percentage: 2,
        maxMgPerKg: 7
    },
    {
        type: 'Local Anaesthetic',
        name: '3% Prilocaine 0.03IU Felypressin',
        percentage: 3,
        maxMgPerKg: 9
    },
    {
        type: 'Local Anaesthetic',
        name: '4% Prilocaine',
        percentage: 4,
        maxMgPerKg: 6
    },
    {
        type: 'Local Anaesthetic',
        name: '4% Articaine 1:100000 Adrenaline',
        percentage: 4,
        maxMgPerKg: 7
    },
    {
        type: 'Local Anaesthetic',
        name: '2% Mepivicaine 1:100000 Adrenaline OR 3% Mepivicaine',
        maxMgPerKg: null,
        carpuleException: 3,
        exception: '3-6yo max 1.8mL; 6-14yo max 2.7mL'
    },
    {
        type: 'Analgesic',
        name: 'Paracetamol',
        maxMgPerKg: 15,
        maxDoseForPeriod: 4000,
        doseFrequency: '4-6 hrs'
    },
    {
        type: 'Analgesic',
        name: 'Ibuprofen',
        maxMgPerKg: 5,
        maxMgPerKgUpper: 10,
        maxDoseForPeriod: 2400,
        doseFrequency: '6-8 hrs'
    },
    {
        type: 'Miscellaneous',
        name: 'Adrenaline: 1:1000',
        maxMgPerKg: 0.01,
        maxDoseForPeriod: 0.5,
        doseFrequency: '3-5 mins'
    }
];
