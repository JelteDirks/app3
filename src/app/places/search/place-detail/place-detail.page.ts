import {Component, OnInit} from '@angular/core';
import {Place, PlacesService} from '../../places.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    public place: Place;

    constructor(private placesService: PlacesService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.place = this.placesService.getPlaceByID(params.get('placeID'));
        });
    }

    onBook() {
        this.navController.navigateBack('/places/tab/search');
    }

    onEdit() {
        this.navController.navigateForward(['/places/tab/offers/edit', this.place.id]);
    }

}
