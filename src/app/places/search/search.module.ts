import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SearchPage} from './search.page';
import {Place, PlacesService} from '../places.service';

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
export class SearchPageModule implements OnInit {

    public places: Place[] = [];

    constructor(private placesService: PlacesService) {
    }

    ngOnInit(): void {
        this.places = this.placesService.places;
    }
}
