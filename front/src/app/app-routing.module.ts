import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: "", redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "products", component: ProductsComponent },
    { path: "profile", component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
