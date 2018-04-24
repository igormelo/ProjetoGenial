import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css'],
})
export class StatusPageComponent implements OnInit {
  guid: string;
  res: any[];
  constructor(public db: AngularFireDatabase, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params =>{
      this.guid = params["guid"];
    })
   }

  ngOnInit() {
  }
  search(){
    this.db.list('registros').valueChanges().subscribe(res =>{
      this.res = res;
    });
  }


}
