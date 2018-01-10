import { Component, OnInit } from '@angular/core';

import {LoginComponent} from '../../login/login.component';


import {HomeComponent} from "../../home/home.component";
import { Router, ActivatedRoute } from '@angular/router';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';//ramoon

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// import { AuthenticationService } from '../../services/authentication.service';
// import {AlertService } from '../../services/alert.service';
import { AlertService, AuthenticationService, LogueadoService} from '../../../services/index';
// import { AlertComponent } from '../../../_directives/index';
// import { AuthGuard } from '../../../_guards/index';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private home:HomeComponent,
        public  logueadoService: LogueadoService
        ) { }

  ngOnInit() {



  }

  loguear()
  {

    // document.getElementById("logout").style.display="inline";
    // document.getElementById("login").style.display="none";

  }



  logout(){
    this.logueadoService.logouteando();



    console.log(localStorage.loggedIn);
    localStorage.loggedIn=false;
    console.log(localStorage.loggedIn);
      // console.log(document.getElementById("verUsuarios").style);
    this.home.logout();
    delete localStorage.accesToken;
      this.router.navigate(['/home']);
    //localStorage.removeItem(accessToken);

    //console.log("logueado: "+this.logueado);

    // document.getElementById("logout").style.display="none";
    // document.getElementById("login").style.display="inline";


  }




}
