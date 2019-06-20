// Data for each module, usable across app.
export class ModuleData {
    title: string;          // Readable title of module
    path: string;           // Path used by router
    description ? = '';     // Description of module
    hide ? = false;         // Whether module will be hidden
}

export const moduleLibrary = new Map<string, ModuleData>([
    ['anaesthetics', {
        title: 'Lethal Dose',
        path: 'anaesthetics',
        description: 'Calculate max dose for drugs.'
    }
    ],
    ['test 1', {
        title: 'Test 1',
        path: 'anaesthetics',
        description: 'Test 1'
    }
    ],
    ['test 2', {
        title: 'Test 2',
        path: 'anaesthetics',
        description: 'Test 2'
    }
    ],
    ['test 3', {
        title: 'Test 3',
        path: 'anaesthetics',
        description: 'Test 3'
    }
    ]
]);

