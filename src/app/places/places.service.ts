import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    public internalPlaces: Place[] = [
        {
            id: '1',
            title: 'Geulle',
            imgURI: 'https://www.placehold.it/200x200',
            price: 10.50,
            description: 'Mooie tent man.'
        },
        {
            id: '2',
            title: 'Bunde',
            imgURI: 'https://www.placehold.it/200x200',
            price: 9.50,
            description: 'Lelijke tent man.'
        }
    ];

    get places(): Place[] {
        return [...this.internalPlaces];
    }
}


export interface Place {
    id: string;
    title: string;
    imgURI: string;
    price: number;
    description: string;
}
