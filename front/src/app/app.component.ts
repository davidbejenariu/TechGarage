import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'front';

    constructor(
        public tokenStorage: TokenStorageService
    ) { }

    isAuthenticated = this.tokenStorage.getToken();
}
