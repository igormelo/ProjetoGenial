import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { System } from '../system';
import { UserService } from '../services/user.service';
import { Usuario } from '../usuario';
import * as jsPDF from 'jspdf';
import { start } from 'repl';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
dado: any[];
p: number = 1;
key: string = 'date';
reverse: boolean = false;
response: any;
owner: any;
process: any;
compliance: any;

  constructor(private userService: UserService) {
    
  }
  ngOnInit() {
    this.userService.getUser().subscribe(data => this.dado = data);
    this.sort(this.key);

  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  getUrls(id: string){
    this.userService.getUrlGestor(id).subscribe(data=> this.response = (<any>data)._body);
    this.userService.getUrlOwner(id).subscribe(data => this.owner = (<any>data)._body);
    this.userService.getUrlProcessos(id).subscribe(data => this.process = (<any>data)._body);
    this.userService.getUrlCompliance(id).subscribe(data => this.compliance = (<any>data)._body);
    var email = prompt("Digite o email do gestor");
    if(email !== null || email !==""){
      console.log(email+ ": "+this.response);  
    } else {
      console.log("Email vazio");
    }
  }
  createCard(dado){
   var doc = new jsPDF('p','pt','a4');
   for(var i = 0; i<dado.length; i++){
   doc.text(20,20,dado.name)
   doc.text(60,20,dado.email);
   doc.text(90,20,dado.uid);
   }
   doc.addPage();
   doc.save('pdf.pdf');
  }
  

}
