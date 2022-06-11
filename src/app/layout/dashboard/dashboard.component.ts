import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../shared/services/data.service';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../shared/models/app.model';
import { ModalComponent } from './components/modal/modal.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    projects$: Observable<any[]>;
    public isLoggedIn$: Observable<boolean>;

    constructor(private dataService: DataService,
        private router: Router,
        private modal: NgbModal) {}

    ngOnInit() {
        this.isLoggedIn$ = this.dataService.isUserLoggedIn$();
        this.getProjects();
    }

    getProjects() {
        this.projects$ = this.dataService.getProjects();
    }

    addNewProject() {
        this.router.navigate(['/add']);
    }

    deleteModal(item: Project) {
        const modalRef = this.modal.open(ModalComponent);
        modalRef.componentInstance.deleteObject = item;
    }

}
