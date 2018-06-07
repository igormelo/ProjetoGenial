import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { UUID } from 'angular2-uuid';
import { Usuario } from '../usuario';


@Injectable()
export class UserService {
  private url = 'http://localhost/';
  constructor(private http: Http, private _http: HttpClient) {
   }

  getGuid(){
    return this._http.get(this.url + 'GF.ControleAcesso.Web/api/User/guid').map(response =>
      response);
  }
  getUser(){
    return this.http.get(this.url + 'GF.ControleAcesso.Web/api/User/ObterUser').map(res =>res.json()).catch(res => res.json());
  }
  create(user){
    return this.http.post(this.url + 'GF.ControleAcesso.Web/api/User/Criar', user).map(res => res);
  }
  getUserById(id: string){
    return this.http.get(this.url + 'GF.ControleAcesso.Web/api/User/RetornarUserPorId/' + id).map(res => res.json());
  }
  getUrlGestor(guid: string){
    return this.http.get(this.url + 'GF.ControleAcesso.Web/api/User/ObterUrlGestor?guid='+guid).map(res => res);
  }
  getUrlOwner(guid: string){
    return this.http.get(this.url + 'GF.ControleAcesso.Web/api/User/ObterUrlOwner?guid='+guid).map(res => res);
  }
  getUrlProcessos(guid: string){
    return this.http.get(this.url + 'GF.ControleAcesso.Web/api/User/ObterUrlProcessos?guid='+guid).map(res =>res);
  }
  getUrlCompliance(guid: string){
    return this.http.get(this.url + 'GF.ControleAcesso.Web/api/User/ObterUrlCompliance?guid='+guid).map(res =>res);
  }
  getToken(token: string){
    return this.http.get(this.url + 'GF.ControleAcesso.Web/api/User/getToken?token='+token).map(res =>res.json());
  }
}
