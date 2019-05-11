import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user: Subject<User> = new Subject();
    // tslint:disable-next-line:variable-name
    private _usr: User = null;

    constructor() {

    }

    login(credentials): User {
        const {name, email} = credentials;

        this._usr = {
            name,
            email,
            id: '123'
        };

        this.user.next({...this._usr});

        return {...this._usr};
    }

    logout() {
        this._usr = null;
        this.user.next(null);
    }

    get usr() {
        return this._usr;
    }
}

export interface User {
    name: string;
    id: string;
    email: string;
}
