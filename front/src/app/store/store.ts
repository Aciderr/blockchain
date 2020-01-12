import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Store {
    private _clients$ = new BehaviorSubject(null);
    private _loans$ = new BehaviorSubject(null);
    private _isSaving$ = new BehaviorSubject(false);

    get clients$() {
        return this._clients$.asObservable();
    }

    get loans$() {
        return this._loans$.asObservable();
    }

    get isSaving$() {
        return this._isSaving$.asObservable();
    }

    setClients(value: string[]) {
        this._clients$.next(value);
    }

    setLoans(value: any[]) {
        this._loans$.next(value);
    }

    setIsSaving() {
        this._isSaving$.next(true);
    }

    setIsSaved() {
        this._isSaving$.next(false);
    }
}