import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { StartComponent } from './start/start.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
    declarations: [
        AdminComponent,
        LayoutComponent,
        StartComponent,
        CustomerComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
