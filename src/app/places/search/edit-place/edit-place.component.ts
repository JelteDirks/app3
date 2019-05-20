import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../places.service';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-edit-place',
    templateUrl: './edit-place.component.html',
    styleUrls: ['./edit-place.component.scss'],
})
export class EditPlaceComponent implements OnInit {

    @Input() place: Place;

    constructor(private modController: ModalController) {
    }

    ngOnInit() {
    }

    onSave(): void {
        this.modController.dismiss({...this.place}, 'save');
    }

    onCancel(): void {
        this.modController.dismiss(null, 'cancel');
    }
}
