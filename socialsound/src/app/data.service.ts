import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    result: any;

    constructor(private _http: Http) { }

    getUsers() {
        this._http.get('/users').subscribe((data) => {
            this.result = data.json();
        });
    }

    getUserData() {
        return this.result;
    }

}
