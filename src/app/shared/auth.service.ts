import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    public userState: boolean = false;
    
    public login(userCredential: {
        email: string, 
        password: string
    }): void{
        this.userState = true;
    }

    public logout(): void{
        this.userState = false;
    }

}
