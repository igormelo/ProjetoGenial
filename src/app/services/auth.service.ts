import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../user-login';

@Injectable()
export class AuthService {
  usuario: UserLogin;
  private usuarioAutenticado: boolean = false;
  showLoading = new EventEmitter<boolean>();
  constructor(private router: Router) { }


  usuarioIsAuth() {
    return this.usuarioAutenticado;
  }
  login(usuario: UserLogin){
    if(usuario.user == "admin" && usuario.password == "gfadmin"){
      localStorage.setItem('user', usuario.user);
      localStorage.setItem('pass', usuario.password);
      this.usuarioAutenticado = true;
      setTimeout((router: Router)=>{
        this.showLoading.emit(true);
        this.router.navigate(['/registros']);
      },2000)
    } else if (usuario.user == null && usuario.password == null) {
      alert("Usuario e senha em branco");
    } else {
      this.usuarioAutenticado = false;
      alert("Login e/ou senha errados");
    }
  }
}
