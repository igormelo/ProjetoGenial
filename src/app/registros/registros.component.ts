import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { System } from '../system';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
res: any[];
item: AngularFireList<any[]>
p: number = 1;
key: string = 'date';
reverse: boolean = false;
  constructor(public db: AngularFireDatabase) {
    this.item = this.db.list('registros');
  }
  ngOnInit() {
   this.db.list('registros').valueChanges().subscribe(res =>{
      this.res = res;
    });
  }
  delete(item): void{
    var items = this.db.list('registros');
    items.remove(item);
  }
  showMessage(){
    var yes = confirm("Deseja deletar os registros");
    if(yes == true){
      var items = this.db.list('registros');
      items.remove();
    }
  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
