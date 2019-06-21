// Average weight for age at 50th percentile
// Sourced from The World Health Organization (WHO), Gerontology Research Center (National Institutes of Health, USA),
// and the U.S. Centers for Disease Control and Prevention (CDC). Published 2000

class AgeWeight {
    gender: string;
    age: number;
    weight: number;
}

const ageWeightList: AgeWeight[] = [
    {
        gender: 'male',
        age: 1,
        weight: 9.6
    },
    {
        gender: 'male',
        age: 2,
        weight: 12.5
    },
    {
        gender: 'male',
        age: 3,
        weight: 14
    },
    {
        gender: 'male',
        age: 4,
        weight: 16.3
    },
    {
        gender: 'male',
        age: 5,
        weight: 18.4
    },
    {
        gender: 'male',
        age: 6,
        weight: 22.9
    },
    {
        gender: 'male',
        age: 7,
        weight: 22.9
    },
    {
        gender: 'male',
        age: 8,
        weight: 25.6
    },
    {
        gender: 'male',
        age: 9,
        weight: 28.6
    },
    {
        gender: 'male',
        age: 10,
        weight: 32
    },
    {
        gender: 'male',
        age: 11,
        weight: 35.6
    },
    {
        gender: 'male',
        age: 12,
        weight: 39.9
    },
    {
        gender: 'male',
        age: 13,
        weight: 45.3
    },
    {
        gender: 'male',
        age: 14,
        weight: 50.8
    },
    {
        gender: 'male',
        age: 15,
        weight: 56
    },
    {
        gender: 'male',
        age: 16,
        weight: 60.8
    },
    {
        gender: 'male',
        age: 17,
        weight: 64.4
    },
    {
        gender: 'male',
        age: 18,
        weight: 66.9
    },
    {
        gender: 'male',
        age: 19,
        weight: 68.9
    },
    {
        gender: 'male',
        age: 20,
        weight: 70.3
    },
    {
        gender: 'female',
        age: 1,
        weight: 9.2
    },
    {
        gender: 'female',
        age: 2,
        weight: 12
    },
    {
        gender: 'female',
        age: 3,
        weight: 14.2
    },
    {
        gender: 'female',
        age: 4,
        weight: 15.4
    },
    {
        gender: 'female',
        age: 5,
        weight: 17.9
    },
    {
        gender: 'female',
        age: 6,
        weight: 19.9
    },
    {
        gender: 'female',
        age: 7,
        weight: 22.4
    },
    {
        gender: 'female',
        age: 8,
        weight: 25.8
    },
    {
        gender: 'female',
        age: 9,
        weight: 28.1
    },
    {
        gender: 'female',
        age: 10,
        weight: 31.9
    },
    {
        gender: 'female',
        age: 11,
        weight: 36.9
    },
    {
        gender: 'female',
        age: 12,
        weight: 41.5
    },
    {
        gender: 'female',
        age: 13,
        weight: 45.8
    },
    {
        gender: 'female',
        age: 14,
        weight: 47.6
    },
    {
        gender: 'female',
        age: 15,
        weight: 52.1
    },
    {
        gender: 'female',
        age: 16,
        weight: 53.5
    },
    {
        gender: 'female',
        age: 17,
        weight: 54.4
    },
    {
        gender: 'female',
        age: 18,
        weight: 56.7
    },
    {
        gender: 'female',
        age: 19,
        weight: 57.1
    },
    {
        gender: 'female',
        age: 20,
        weight: 58
    }
];

export function getWeight(gender: string, age: number): number {
    return(ageWeightList.filter((ageWeight) => ageWeight.age === age && ageWeight.gender === gender)[0].weight);
}
