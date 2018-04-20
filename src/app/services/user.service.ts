import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {
  private url = 'http://localhost/';
  constructor(private http: Http, private _http: HttpClient) { }

  getGuid(){
    return this._http.get(this.url + 'WebApplication1/api/User/guid').map(response =>{
      response;
     });
  }
  getCountries(){
    return this.http.get(this.url + 'Desafio/api/Countries/ObterLista').map(res =>{
      res.json();
    })
  }
}
