import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddProjectComponent } from '../components/add-project/add-project.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, DataTablesModule],
    declarations: [DashboardComponent, ModalComponent]
})
export class DashboardModule {}
