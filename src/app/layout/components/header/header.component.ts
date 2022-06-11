import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../../shared/services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public isLoggedIn$: Observable<boolean>;

    constructor(public router: Router, private dataService: DataService) {
    }

    ngOnInit() {
        this.isLoggedIn$ = this.dataService.isUserLoggedIn$();
    }

    onLoggedout() {
        this.dataService.logout(); 
    }
}
