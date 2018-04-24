import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { UUID } from 'angular2-uuid';


@Injectable()
export class UserService {
  private url = 'http://localhost/';
  constructor(private http: Http, private _http: HttpClient) { }

  getGuid(){
    return this._http.get(this.url + 'WebApplication1/api/User/guid').map(response =>
      response);
  }
  getUser(){
    return this.http.get(this.url + 'WebApplication1/api/User/ObterUser').map(res =>res.json());
  }
  create(){
    return this.http.get(this.url + 'WebApplication/api/user/Criar');
  }
  getUserById(id: UUID){
    return this.http.get(this.url + 'WebApplication1/api/User/RetornarUserPorId' + id).map(res => res.json());
  }

}
