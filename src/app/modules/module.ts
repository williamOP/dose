import { ModuleDataService, ModuleMetadata } from '../dataServices/moduleData.service';
import { AfterContentInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


export interface Filter {
    category: string;                           // Category that filter will be placedunder
    name: string;                               // The text describing the filter
    shown: boolean;                             // Whether the filter is set to shown or not
}

export interface SortByItem {
    propertyName: string;                        // Property name of what to sort by
    displayName: string;                         // The displayed name to the user
}

// Having a shared Module class allows the module viewer to access commonly used information
export class Module implements AfterContentInit {
    @ViewChild(IonContent) content: IonContent;
    metadata: ModuleMetadata;                   // Simple information for Module
    sortByList: SortByItem[] = [{propertyName: '', displayName: 'CurrentSort'}];
        // List of properties that can be sorted by as well as how that property will be displayed to the user
        // CurrentSort will hold the active property and should not be manually overwritten.
    filters: Filter[] = [];                     // If filters are added, a filter icon will appear in the toolbar
    displayedResult = '';                       // If set, a footer will appear showing the result
    displayedResultDescription = '';            // If set, the footer can be pressed to show this description
    searchbarPlaceholder = '';
    searchbarText = '';

    constructor(moduleID: string, private moduleDataService = new ModuleDataService()) {
        // Pulls metadata for the module.
        this.metadata = this.moduleDataService.getModuleMetadata(moduleID);
    }

    ngAfterContentInit() {
        // Ensures initial filters are applied to module
        this.updateFilter();
    }

    // Run by module viewer when the filter updates
    updateFilter() {
    }

    // adds a filter
    addToFilter(category: string, name: string, shown = true): void {
            this.filters.push({category, name, shown});
    }

    // Returns true if filters match provided filterCategory in that filterName, and shown is true.
    shownInFilter(filterCategory: string, filterName: string): boolean {
        return (this.filters.filter((filter) =>
        filter.category === filterCategory && filter.name === filterName && filter.shown === true).length !== 0);
    }

    // adds a filter
    addToSortByList(propertyName: string, displayName: string, active = false): void {
        this.sortByList.push({propertyName, displayName});
        if (active) {
            this.sortByList[0].propertyName = propertyName;
        }
    }

    // Returns the active sortBy item's property name
    getSortByProperty(): string {
        return this.sortByList.filter((sortByItem) => sortByItem.displayName === 'CurrentSort')[0].propertyName;
    }

    // Sorts an array of objects by the provided property
    sortArrayByProperty(array: object[], property: string): void {
        array.sort((a, b) => a[property].localeCompare(b[property]));
    }
}
