import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/services/token-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: any = {
        email: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    role: string = '';

    constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService
    ) {}

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.role = this.tokenStorage.getUser().role;
        }
    }

    onSubmit(): void {
        const { email, password } = this.form;

        this.authService.login(email, password).subscribe({
            next: data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.role = this.tokenStorage.getUser().role;
                this.reloadPage();
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        });
    }

    reloadPage(): void {
        window.location.reload();
    }
}
