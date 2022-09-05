import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/Users/';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUserBoard(token: string): Observable<any> {
        const requestOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        }

        return this.http.get(API_URL + 'GetUserData', requestOptions);
    }
}