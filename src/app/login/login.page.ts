import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string ="";
  password: string ="";

  constructor(private router:Router) { }


  ngOnInit() {
    this.username="admin";
    this.password="admin";
  }

  checkloginAuth() {
    if (this.username=="superadmin" && this.password=="12345678") {
    alert("anda dapat masuk");
      this.router.navigateByUrl('/home',{state: {userRole : "superadmin"} });
    } else if(this.username=="admin" && this.password=="87654321"){
      this.router.navigateByUrl('/home',{state:{userRole : "admin"} });;
    } else {
    alert("krendesial anda salah")
  }
}
}

