import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Router } from '@angular/router';
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate { 

  constructor(private router: Router,
    private auth: AuthService) {}; 

  canActivate() {
    return this.checkLogin();    
  }
  
  checkLogin():Observable<boolean> {

    return this.auth.af.authState
      .map(x => {
        if (x) return true;
        else {
          this.router.navigate(['/login']);
          return false;
        }
      });
    
    
  }

}