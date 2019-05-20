import {Component, OnInit} from '@angular/core';
import {Place, PlacesService} from '../../places.service';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {EditPlaceComponent} from '../edit-place/edit-place.component';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    public place: Place;

    constructor(private placesService: PlacesService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController,
                private modController: ModalController) {
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
        this.modController.create({
            component: EditPlaceComponent, componentProps: {
                place: {...this.place}
            }
        }).then(editModal => {
            editModal.present();
            return editModal.onDidDismiss();
        }).then(dismissData => {
            this.placesService.setPlaceByID(dismissData.data.id, dismissData.data);
            this.place = dismissData.data;
        });
    }

}
