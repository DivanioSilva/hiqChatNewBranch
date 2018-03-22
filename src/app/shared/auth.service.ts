import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "@firebase/auth-types";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

    public userState: User = null;
    public displayName: string ="";
    constructor(public af: AngularFireAuth, private router: Router){
        this.af.authState
            .subscribe(user => {
                this.userState = user;
                if (user) {
                    if (!this.userState.displayName) 
                        this.displayName = "Guest_" + Math.floor((Math.random() * 100000) + 1);
                    else this.displayName = this.userState.displayName;
                }
            })
    }
    
    public login(userCredential: {
        email: string, 
        password: string
    }): void{

        this.af.auth.signInWithEmailAndPassword(userCredential.email, 
            userCredential.password)
            .then(
                (value) => {
                    this.router.navigate(['/dashboard']);
                }, 
                (reason) => console.log('reason: ', reason)
            );
        
    }

    public logout(): void{
        this.af.auth.signOut()
        .then(
            (value) => {
                this.router.navigate(['/login']);
            }, 
            (reason) => console.log('reason: ', reason)
        );
    }

    public createUser(userCredential: {
        email: string, 
        password: string
    }): void{

        this.af.auth.createUserWithEmailAndPassword(userCredential.email, 
            userCredential.password)
            .then(
                (value) => console.log('value: ', value), 
                (reason) => console.log('reason: ', reason)
            );
        
    }
}
