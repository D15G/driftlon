import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BlogComponent} from './blog/blog.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthGuard} from './_core/auth.guard';

export const firebaseConfig = {
  apiKey: 'AIzaSyDDX6D0cNZV3TLLea-tj5igxOxr1Ev7htE',
  authDomain: 'driftlon-917d6.firebaseapp.com',
  databaseURL: 'https://driftlon-917d6.firebaseio.com',
  projectId: 'driftlon-917d6',
  storageBucket: 'driftlon-917d6.appspot.com',
  messagingSenderId: '477706615761',
  appId: '1:477706615761:web:d52b9516177dae17'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
