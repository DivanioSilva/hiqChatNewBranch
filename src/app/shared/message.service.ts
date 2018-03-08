

//

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "@firebase/util";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "./auth.service";


@Injectable()
export class MessageService {

    public baseUrl: string = 'https://hacker-news.firebaseio.com/v0/item/8863.json';

    constructor(public http: HttpClient,
        public fbDatastore: AngularFirestore,
        public auth: AuthService){}
    
    public getHackersNews(): Observable<any> {
        return <any>this.http.get(this.baseUrl);
        
    }

    public getChannelMessage() {
        return this.fbDatastore
            .collection<any>('/hiqchannel')
            .valueChanges();
    }

    public createNewMessage(txtMessage: string) {
        return this.fbDatastore
            .collection<any>('/hiqchannel')
            .add({
                user: this.auth.userState.displayName,
                message: txtMessage,
                date: new Date()
            });
            
    }

}
