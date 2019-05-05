import {Component, OnInit} from '@angular/core';
import {Place, PlacesService} from '../../places.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    public place: Place;

    constructor(private placesService: PlacesService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.place = this.placesService.getPlaceByID(params.get('placeID'));
        });
    }

}
