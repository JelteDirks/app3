import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CanLoad, Route, UrlSegment} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return undefined;
    }
}
