import { Routes } from '@angular/router';

// Import the previously made Map Component 
import { MapComponentComponent } from './map-component/map-component.component';

// Update the routes of the app
export const routes: Routes = [
    {
        path: '', // The quotes will be empty, signifying this will target the default home path
        component: MapComponentComponent, // The component that will show on the default home path will be our Map Component
        title: 'Interactive World Map | Nicole Fortin'
    }
];

// Adding this route will now display "map-component works!" on the first page.