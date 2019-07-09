import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService, User} from '../_core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {email: '', password: ''};
  public errMsg = '';


  constructor(private router: Router,
              private authService: AuthService) {
  }

  async ngOnInit() {
  }

  async login() {
    try {
      await this.authService.loginWithEmailAndPassword(this.user);
      this.router.navigateByUrl('/blog');
    } catch (e) {
      this.errMsg = 'Login fehlgeschlagen!';
    }
  }
}
