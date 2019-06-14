export class La {
    laName: string;
    laPercentage: number;
    maxMgPerKg: number;
    exception?: string;
}

export class Analgesic {
    analgesicName: string;
    maxMgPerKg: number;
    maxMgPerKgUpper?: number;
    maxPer24: number;
    frequency: string;
}

export const laList: La[] = [
    {
        laName: '2% Lignocaine Plain',
        laPercentage: 2,
        maxMgPerKg: 4.4
    },
    {
        laName: '2% Lignocaine 1:80000 Adrenaline',
        laPercentage: 2,
        maxMgPerKg: 7
    },
    {
        laName: '3% Prilocaine 0.03IU Felypressin',
        laPercentage: 3,
        maxMgPerKg: 9
    },
    {
        laName: '4% Prilocaine',
        laPercentage: 4,
        maxMgPerKg: 6
    },
    {
        laName: '4% Articaine 1:100000 Adrenaline',
        laPercentage: 4,
        maxMgPerKg: 7
    },
    {
        laName: '2% Mepivicaine 1:100000 Adrenaline OR 3% Mepivicaine',
        laPercentage: null,
        maxMgPerKg: null,
        exception: '3 carpules <br /> 3-6yo max 1.8mL; 6-14yo max 2.7mL'
    }
];

export const analgesicList: Analgesic[] = [
    {
        analgesicName: 'Paracetamol',
        maxMgPerKg: 15,
        maxPer24: 4000,
        frequency: '4-6'
    },
    {
        analgesicName: 'Ibuprofen',
        maxMgPerKg: 5,
        maxMgPerKgUpper: 10,
        maxPer24: 2400,
        frequency: '6-8'
    }
];
