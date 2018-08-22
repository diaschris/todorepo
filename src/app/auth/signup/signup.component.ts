import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user';
import { Router } from '../../../../node_modules/@angular/router';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
import { AuthService } from '../../services/auth.service';

// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   user={} as User;
  constructor(private afauth: AngularFireAuth,private route:Router,private authService:AuthService) { }

  ngOnInit() {
  }

   signup(user:User){
    this.authService.signupUser(user.email, user.password);
    this.route.navigate(['/welcome']);
  }

}
