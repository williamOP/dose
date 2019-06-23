import { ModuleDataService, ModuleMetadata } from './moduleData.service';

export interface Filter {
    category: string;
    name: string;
    shown: boolean;
}

// Having a shared Module class allows the module viewer to access commonly used information
export class Module {
    metadata: ModuleMetadata;                   // Simple information for Module
    filters: Filter[] = [];
    displayedResult = '';
    displayedResultDescription = '';

    // Run by module viewer when the filter updates
    updateFilter() {
        console.log ('updateFilter() not defined.');
    }

    addToFilter(category: string, name: string, shown = true) {
            this.filters.push({category, name, shown});
    }

    // Returns true if filters match provided filterCategory, filterName, and shown is true.th
    shownInFilter(filterCategory: string, filterName: string) {
        return (this.filters.filter((filter) =>
        filter.category === filterCategory && filter.name === filterName && filter.shown === true).length !== 0);
    }

    constructor(moduleID: string, private moduleDataService = new ModuleDataService()) {
        this.metadata = this.moduleDataService.getModuleMetadata(moduleID);
    }
}
