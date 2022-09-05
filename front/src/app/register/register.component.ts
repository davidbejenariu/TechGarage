import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: any = {
        email: null, 
        password: null,
        role: null,
        firstName: null,
        lastName: null,
        phone: null,
        address: null, 
        city: null,
        county: null,
        country: null,
        zipcode: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService) { }

    ngOnInit(): void { }

    onSubmit(): void {
        const { email, password, role, firstName, lastName, phone, address, city, county, country, zipcode } = this.form;

        this.authService.register(
            email, 
            password, 
            role, 
            firstName, 
            lastName, 
            phone, 
            address, 
            city, 
            county, 
            country, 
            zipcode
            ).subscribe({
                next: data => {
                    console.log(data);
                    this.isSuccessful = true;
                    this.isSignUpFailed = false;
                },
                error: err => {
                    this.errorMessage = err.error.message;
                    this.isSignUpFailed = true;
                }
            });
    }
}
