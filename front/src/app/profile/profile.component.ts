import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    currentUser: any;

    constructor(
        private token: TokenStorageService,
        private user: UserService
        ) { }

    ngOnInit(): void {
        const userToken = this.token.getToken();

        if (userToken != null) {
            this.currentUser = this.user.getUserBoard(userToken);
            console.log(this.currentUser);
        }
    }
}
