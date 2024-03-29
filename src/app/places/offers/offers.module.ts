import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {OffersPage} from './offers.page';

const routes: Routes = [
    {
        path: '',
        component: OffersPage
    },
    {
        path: 'new',
        loadChildren: './new-offer/new-offer.module#NewOfferPageModule'
    },
    {
        path: 'edit/:offerID',
        loadChildren: './edit-offer/edit-offer.module#EditOfferPageModule'
    },
    {
        path: 'bookings',
        loadChildren: './offer-bookings/offer-bookings.module#OfferBookingsPageModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [OffersPage]
})
export class OffersPageModule {
}
