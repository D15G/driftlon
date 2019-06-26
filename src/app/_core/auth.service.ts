import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async loginWithEmailAndPassword (user: User) {
    await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  get authenticated(): boolean {
    return this.afAuth.auth.currentUser !== null;
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }
}
export interface User {
  email: string;
  password: string;
}
