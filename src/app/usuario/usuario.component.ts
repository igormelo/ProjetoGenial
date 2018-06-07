import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';
import { System } from '../system';
import {Http,Headers,Response,URLSearchParams, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { headersToString } from 'selenium-webdriver/http';
import { UserLogin } from '../user-login';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Route, Router, NavigationExtras } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuario = new Usuario();
isReferenced: boolean;
isSended: boolean;
guid: any;
header: Headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
'Accept': 'application/json'
});
  constructor(private http: Http, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getGuid().subscribe(data => this.guid = data);
    this.isSended = false;
  }
  showSnack(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  Yes() { this.isReferenced = true; }
  No() { this.isReferenced = false; }

  send(){
    let now: Date = new Date();
    this.usuario.uid = this.guid;
    this.usuario.dia = now;
    if(!this.usuario.email || !this.usuario.departamento || !this.usuario.gestor ||  !this.usuario.name || !this.usuario.atividade || !this.usuario.modulo || !this.usuario.sistema){
      alert("Preencha todos os campos");
    }
    if(this.isReferenced){
      this.usuario.funcionalidade = null
    } else {
      this.usuario.userReference = null
    }
    this.createUser(this.usuario);
    this.isSended = true;
    this.showSnack();
    setTimeout(()=>{
      let navigation: NavigationExtras ={
        queryParams: {
          guid : this.guid,
        }
      }
      this.router.navigate(["status"], navigation);
    }, 1000)
    console.log(JSON.stringify(this.usuario));
  }

  createUser(usuario){
    this.userService.create(usuario).subscribe(users => usuario = users);
    console.log(usuario);
  }
}
