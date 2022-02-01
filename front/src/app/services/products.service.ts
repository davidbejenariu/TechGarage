import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

export class ProductResponse {
    constructor(
        public name: string,
        public description: string,
        public category: string,
        public price: number,
        public image: string
    ) {};
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private apiUrl = 'https://localhost:44366/api/Products/';
    private apiKey = '';
    
    constructor(
        private http: HttpClient,
        private router: Router
        // private messageService: MessageService
    ) {}

    getProducts() {
        return this.http.get<any>(this.apiUrl + "GetProducts");
    }
}
