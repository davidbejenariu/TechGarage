import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private router: Router
    ) {}

    login() {
        // ...
        localStorage.setItem('token', 'value from an api');
        this.router.navigate(['/dashboard/customer']);
    }

    logout() {
        localStorage.clear();
        // TODO invalidare token
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }
}
