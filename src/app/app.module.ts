import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { RegistrosComponent } from './registros/registros.component';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from "angular2-datatable";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { StatusPageComponent } from './status-page/status-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrosComponent,
    LoginComponent,
    StatusPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    DataTableModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
    


  ],
  providers: [AuthGuardService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
