import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserLogin } from '../user-login';
import { EventEmitter } from 'protractor';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserLogin = new UserLogin();
  showLoading: boolean = false;
  isSended: boolean;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    var obj: any = {
      login: localStorage.getItem('user'),
      senha: localStorage.getItem('pass')
    }
  }

  login(){
    if(this.user.user == "admin" &&  this.user.password == "gfadmin"){
      this.showLoading = true;
      this.isSended = true;
    } 
    this.auth.login(this.user);
    }
  }
