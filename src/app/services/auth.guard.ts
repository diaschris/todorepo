import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private route:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   console.log( this.authService.isAuthenticated(),"authen");
   if(this.authService.isAuthenticated()==true){
   return this.authService.isAuthenticated()
   }else{
       this.route.navigate(['/welcome'])
   }

  }
  
}
