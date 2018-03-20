import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RoutingModule } from './routing.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageService } from './shared/message.service';
import { MessageComponent } from './dashboard/message/message.component';
import { MessageInputComponent } from './dashboard/messageInput/messageInput.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MessageComponent,
    MessageInputComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
