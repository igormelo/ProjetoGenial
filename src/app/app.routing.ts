import {
    Router,
    CanActivate,
    CanActivateChild,
    Routes,
    RouterModule
} from '@angular/router'
import { Injectable, ModuleWithProviders } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { AuthGuardService } from './services/auth-guard.service';
const AppRoutes: Routes = [
    {path: '', component: UsuarioComponent},
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registros', component: RegistrosComponent, canActivate:[AuthGuardService]},
    {path: 'status', component: StatusPageComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);