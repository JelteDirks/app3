import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PlaceDetailPage} from './place-detail.page';
import {EditPlaceComponent} from '../edit-place/edit-place.component';

const routes: Routes = [
    {
        path: '',
        component: PlaceDetailPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PlaceDetailPage, EditPlaceComponent],
    entryComponents: [EditPlaceComponent]
})
export class PlaceDetailPageModule {
}
