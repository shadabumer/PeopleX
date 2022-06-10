import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../shared/services/data.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    projects$: Observable<any[]>;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.getProjects();
     
    }

    getProjects() {
        this.projects$ = this.dataService.getProjects();
    }

}
