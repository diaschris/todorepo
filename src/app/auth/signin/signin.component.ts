import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
import { Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user={} as User;
  constructor(private afauth: AngularFireAuth,private route:Router,private authService:AuthService) { }

  ngOnInit() {
  }

 
 login(user:User){
  this.authService.signinUser(user.email, user.password);
}

}
