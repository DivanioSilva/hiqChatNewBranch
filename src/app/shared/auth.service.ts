import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "@firebase/auth-types";

@Injectable()
export class AuthService {

    public userState: User = null;

    constructor(public af: AngularFireAuth){
        this.af.authState
            .subscribe(user => {
                this.userState = user;
                console.log('Auth Service Init:', user);
            })
    }
    
    public login(userCredential: {
        email: string, 
        password: string
    }): void{

        this.af.auth.signInWithEmailAndPassword(userCredential.email, 
            userCredential.password)
            .then(
                (value) => console.log('value: ', value), 
                (reason) => console.log('reason: ', reason)
            );
        
    }

    public logout(): void{
        this.af.auth.signOut()
        .then(
            (value) => console.log('value: ', value), 
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
