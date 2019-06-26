import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService, User} from '../_core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = { email: 'driftlon@ictbz-blj.ch', password: 'VielBier' };
  public errMsg = '';


  @ViewChild('loginForm') public loginForm: NgForm;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  async ngOnInit() {
  }

  async login() {
    if (this.loginForm.valid === true) {
      try {
        await this.authService.loginWithEmailAndPassword(this.user);
        this.router.navigateByUrl('/blog');
      } catch (e) {
        this.errMsg = 'Login fehlgeschlagen!';
      }
    }
  }
}
