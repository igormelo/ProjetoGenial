import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css'],
})
export class StatusPageComponent implements OnInit {
  guid: string;
  res: any[];
  error: any[];
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.queryParams.subscribe(params =>{
      this.guid = params["guid"];
    })
   }

  ngOnInit() {
    
  }
  search(): any{
    // this.db.list('registros').snapshotChanges().map(changes => {
    //   return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
    // }).subscribe(user =>{
    //   this.res = user;
    // })
    this.userService.getUser().subscribe(data => this.res = data, err => console.log(err));
  }
  showInfo(id: string){
    this.userService.getUserById(id).subscribe(data => console.log(data));
  }


}
