import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    public internalPlaces: Place[] = [
        {
            id: '1',
            title: 'Geulle',
            imgURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kasteel_Geulle.jpg/2880px-Kasteel_Geulle.jpg',
            price: 10.50,
            subTitle: 'Mooie tent man',
            description: 'Geulle is een exentrieke plaats in het zuiden van Limburg. Veel natuur met zowel enkele heuvels als de Maas.'
        },
        {
            id: '2',
            title: 'Bunde',
            imgURI: 'https://www.frankwandelt.nl/images/stories/Wandelingen_nederland/gw_bunde/artikel/groene_wissel_bunde_350px.jpg',
            price: 9.50,
            subTitle: 'Lelijke tent man',
            description: 'Bunde is een prachtige plaats om te wonen, veel bos en natuur, goede openbare verbinding en mooie huizen.'
        }
    ];

    get places(): Place[] {
        return [...this.internalPlaces];
    }

    public getPlaceByID(id: string): Place {
        return this.internalPlaces.find(p => p.id === id);
    }

    public setPlaceByID(id: string, newPlace: Place): void {
        this.internalPlaces = this.internalPlaces.map(place => {
            return place.id === id ? newPlace : place;
        });
    }
}


export interface Place {
    id: string;
    title: string;
    imgURI: string;
    price: number;
    subTitle: string;
    description: string;
}
