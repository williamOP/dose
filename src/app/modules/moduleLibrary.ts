// Data for each module, usable across app.
export class ModuleData {
    title: string;          // Readable title of module
    path: string;           // Path used by router
    directory: string;      // Location of component
    description ? = '';     // Description of module
    hide ? = false;         // Whether module will be hidden
}

export const moduleLibrary = new Map<string, ModuleData>([
    ['anaesthetics', {
        title: 'Lethal Dose (Test text 1)',
        path: 'anaesthetics',
        directory: './modules/anaesthetics/anaesthetics.module#AnaestheticsPageModule',
        description: 'Calculate max dose for drugs.'
    }
    ],
    ['anaesthetics2', {
        title: 'Lethal Dose (Test text 2)',
        path: 'anaesthetics',
        directory: './modules/anaesthetics/anaesthetics.module#AnaestheticsPageModule'
    }
    ]
]);

