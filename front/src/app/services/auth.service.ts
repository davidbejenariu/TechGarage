import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:44366/api/Auth/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    login(
        email: string, 
        password: string
        ): Observable<any> {
        return this.http.post(AUTH_API + 'Login', {
            email,
            password
        }, httpOptions);
    }

    register(
        email: string, 
        password: string,
        role: string,
        firstName: string,
        lastName: string,
        phone: string,
        address: string, 
        city: string,
        county: string,
        country: string,
        zipcode: string
        ) : Observable<any> {
            return this.http.post(AUTH_API + 'Register', {
                email, password, role, firstName, lastName, phone, address, city, county, country, zipcode
            }, httpOptions);
        }
}
