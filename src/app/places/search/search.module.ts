import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SearchPage} from './search.page';

const routes: Routes = [
    {
        path: '',
        component: SearchPage
    },
    {
        path: ':placeID',
        loadChildren: './place-detail/place-detail.module#PlaceDetailPageModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SearchPage]
})
export class SearchPageModule {
}
