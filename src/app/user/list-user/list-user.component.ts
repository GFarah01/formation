import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
private users: any[] = 
[{ "id":1, "firstName":"Mohamed", "lastName": "Snoussi", "userName": "msnoussi", "salary":1000, "birthday": new Date() },
 { "id":2, "firstName":"Asma", "lastName": "Abidi", "userName": "aabidi", "salary":1500, "birthday": new Date() }];

  constructor() { }

  ngOnInit() {
  }

}
