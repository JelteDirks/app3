import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Place, PlacesService} from '../../places.service';

@Component({
    selector: 'app-edit-offer',
    templateUrl: './edit-offer.page.html',
    styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

    public place: Place;

    constructor(private activatedRoute: ActivatedRoute,
                private placesService: PlacesService) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.place = this.placesService.getPlaceByID(paramMap.get('offerID'));
        });
    }

}
