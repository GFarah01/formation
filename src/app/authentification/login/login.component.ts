import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
private title ="Login" ;
defaultUserName = "farah";
  constructor(private router: Router) { console.log("init constructor ..."); }

  ngOnInit() { console.log(" init ngOnInit ...");
  }

  /*ngOnDestroy()
    {console.log("init ngOnDestroy ...");} */

  login() {this.router.navigate(['/home']); }

}
