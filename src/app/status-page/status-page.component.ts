import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css'],
})
export class StatusPageComponent implements OnInit {
  @Input() uuid: string = '';
  guid: string;
  constructor() { }

  ngOnInit() {

  }


}
