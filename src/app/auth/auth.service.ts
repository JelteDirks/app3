import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user: Subject<User> = new Subject();
    private _user: User = null;

    constructor() {

    }

    login(credentials): User {
        const {name, email} = credentials;

        this._user = {
            name,
            email,
            id: '123'
        };

        this.user.next({...this._user});

        return {...this._user};
    }

    logout() {
        this._user = null;
        this.user.next(null);
    }
}

export interface User {
    name: string;
    id: string;
    email: string;
}
