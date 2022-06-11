import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    displayLoginError: boolean = false;

    constructor(public router: Router, private dataService: DataService) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required]),
          });
    }

    get f() { return this.loginForm.controls; }

    onLoggedin() {
        
        const {email, password} = this.loginForm.value;
        console.log('email:', email)
        console.log('password:', password)
        if(!email || email.length == 0) return;
        if(!password || password.length == 0) return;
        const isLoginSuccess = this.dataService.login(email, password);

        if(isLoginSuccess) {
            this.loginForm.reset();
            return this.router.navigate(['/dashboard']);
        }

        return this.displayLoginError = true;
        
    }
}
