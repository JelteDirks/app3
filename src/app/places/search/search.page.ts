import {Component, OnInit} from '@angular/core';
import {Place, PlacesService} from '../places.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    public places: Place[] = [];

    constructor(private placesService: PlacesService) {
    }

    ngOnInit(): void {
        this.places = this.placesService.places;
    }
}
