import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    result: any;
    user = {};

    constructor(private http: Http) { }

    getAllUsers() {
        this.http.get('/users').subscribe((data) => {
            this.result = data.json();
        });
    }

    getUserData() {
        return this.result;
    }

    getUserById(id) {
        return this.http.get('/users/' + id).subscribe((data) => {
            this.result = data.json();
        });
    }

    saveUser(data) {
        return new Promise((resolve, reject) => {
            this.http.post('/users', data)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteUser(id) {
        this.http.delete('/users/' + id).subscribe(() => {
        });
    }

    updateUser(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put('/users/' + id, data)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
