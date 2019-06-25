import { ModuleDataService, ModuleMetadata } from '../dataServices/moduleData.service';
import { AfterContentInit } from '@angular/core';


export interface Filter {
    category: string;                           // Category that filter will be placedunder
    name: string;                               // The text describing the filter
    shown: boolean;                             // Whether the filter is set to shown or not
}

// Having a shared Module class allows the module viewer to access commonly used information
export class Module implements AfterContentInit {
    metadata: ModuleMetadata;                   // Simple information for Module
    filters: Filter[] = [];                     // If filters are added, a filter icon will appear in the toolbar
    displayedResult = '';                       // If set, a footer will appear showing the result
    displayedResultDescription = '';            // If set, the footer can be pressed to show this description

    // Run by module viewer when the filter updates
    updateFilter() {
        console.log ('updateFilter() not defined.');
    }

    ngAfterContentInit() {
        // Ensures initial filters are applied to module
        if (this.filters.length !== 0) {
            this.updateFilter();
        }
    }

    // adds a filter
    addToFilter(category: string, name: string, shown = true) {
            this.filters.push({category, name, shown});
    }

    // Returns true if filters match provided filterCategory, filterName, and shown is true.th
    shownInFilter(filterCategory: string, filterName: string): boolean {
        return (this.filters.filter((filter) =>
        filter.category === filterCategory && filter.name === filterName && filter.shown === true).length !== 0);
    }

    // Sorts an array of objects by the provided property
    sortArrayByProperty(array: object[], property: string) {
        array.sort((a, b) => a[property].localeCompare(b[property]));
    }

    constructor(moduleID: string, private moduleDataService = new ModuleDataService()) {
        // Pulls metadata for the module.
        this.metadata = this.moduleDataService.getModuleMetadata(moduleID);
    }
}
