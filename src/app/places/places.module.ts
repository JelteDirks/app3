import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PlacesPage} from './places.page';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/places/tab/search'
    },
    {
        path: 'tab',
        component: PlacesPage,
        children: [
            {
                path: 'search',
                loadChildren: './search/search.module#SearchPageModule'
            },
            {
                path: 'offers',
                loadChildren: './offers/offers.module#OffersPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PlacesPage]
})
export class PlacesPageModule {
}
