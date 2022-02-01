import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LayoutComponent } from './layout/layout.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
    { 
        path: "dashboard", 
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                component: StartComponent
            },
            {
                path: "admin",
                component: AdminComponent
            },
            {
                path: "customer",
                component: CustomerComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
