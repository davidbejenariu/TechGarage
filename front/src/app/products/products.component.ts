import { Component, NgIterable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService, ProductResponse } from '../services/products.service';

declare var require: any;

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    products: any;
    // TODO display images
    // img = require("../resources/images/NanoleafBulb.jpg");
  
    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(
            response => {
                console.log(response);
                this.products = response;
            }
        );
    }       
}
