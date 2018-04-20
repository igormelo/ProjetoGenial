import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { User } from '../user';
import { System } from '../system';
import {AngularFireDatabase} from 'angularfire2/database';
import {Http,Headers,Response,URLSearchParams, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { headersToString } from 'selenium-webdriver/http';
import { UserLogin } from '../user-login';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuario: User = new User();
sistema: System = new System();
isReferenced: boolean;
isSended: boolean;
guid: any;
header: Headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
'Accept': 'application/json'
});
  constructor(private ad: AngularFireDatabase, private http: Http, private userService: UserService) { }

  ngOnInit() {
    this.userService.getGuid().subscribe(data => console.log(data));
    this.userService.getCountries().subscribe(data => console.log(data));
    this.isSended = false;
  }
  showSnack(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  Yes(){
      this.isReferenced = true;
  }
  No(){
    this.isReferenced = false;

  }
  send(){
    if(!this.usuario.email || !this.usuario.departamento || !this.usuario.gestor ||  !this.usuario.name || !this.sistema.atividade || !this.sistema.modulo || !this.sistema.nome){
      alert("Preencha todos os campos");
    }
    let now: Date = new Date();
    this.ad.list("registros").push({
      id: this.guid,
      hora: now.getTime(),
      nome: this.usuario.name,
      email: this.usuario.email,
      departamento: this.usuario.departamento,
      gestor: this.usuario.gestor,
      referencia: this.usuario.userReference,
      sistema: this.sistema.nome,
      modulo: this.sistema.modulo,
      atividade: this.sistema.atividade
    }).then((t: any) =>{
      this.isSended = true;
      this.showSnack();
      setTimeout(()=>{
        location.reload();
        window.open("status", "_blank");
      },1000)
    },(e: any) =>{
      this.isSended = false;
    })
  }
  sendEmail(){
    let my = "https://us-central1-sendm-bdb00.cloudfunctions.net"
    let url = `${my}/httpEmail`
    let params: URLSearchParams = new URLSearchParams();
    let headerss = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    let options: RequestOptions = new RequestOptions({headers: headerss});

    params.set('from', 'hello@angularfirebase.com');
    params.set('subject','teste');
    params.set('to', 'igor.leite@genialinvestimentos.com.br');
    params.set('content','conteudo');

    return this.http.post(url, params, options)
    .toPromise()
    .then((res)=>{
      console.log(res);
    })
    .catch(err =>{
      console.error(err);
    })
  }
}
