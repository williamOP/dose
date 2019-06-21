// Data for each module, usable across app.
export class ModuleData {
    title: string;          // Title of module displayed in app
    id: string;             // unique id
    description ? = '';     // Description of module
    hide ? = false;         // Whether module will be hidden
}

// Having a shared Module class allows the module viewer to access commonly used information
export class Module {
    moduleData: ModuleData;
    inViewer = false;
}

export const moduleLibrary: ModuleData[] = [
    {   title: 'Lethal Dose',
        id: 'anaesthetics',
        description: 'Calculate max dose for drugs.'
    },
    {
        title: 'Procedure Outcomes',
        id: 'success-rates',
        description: 'Survival and failure rates of procedures.'
    },
    {
        title: 'Module Viewer Blank (testing)',
        id: 'module',
        description: 'Module Viewer blank'
    },
    {
        title: 'Module Viewer Lethal Dose (testing)',
        id: 'module/anaesthetics',
        description: 'Module Viewer with lethal dose'
    },
    {
        title: 'Module Viewer Procedure Outcomes (testing)',
        id: 'module/success-rates',
        description: 'Module Viewer with procedure outcomes'
    }
];

export function getModuleData(id: string): ModuleData {
    return(moduleLibrary.filter((module) => module.id === id)[0]);
}
