import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { RegistrosComponent } from './registros/registros.component';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from "angular2-datatable";
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatSort, MatSortModule} from '@angular/material';
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


const config = {
    apiKey: "AIzaSyCNVF74javdKD5lTM-8iaxWFpfCjBSa_LI",
    authDomain: "sendm-bdb00.firebaseapp.com",
    databaseURL: "https://sendm-bdb00.firebaseio.com",
    projectId: "sendm-bdb00",
    storageBucket: "",
    messagingSenderId: "256506427545"

}
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
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    DataTableModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config)

  ],
  providers: [AngularFireDatabase, AuthGuardService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
