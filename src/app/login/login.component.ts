import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public errMsg = '';


  @ViewChild('loginForm') public loginForm: NgForm;

  constructor(private router: Router) {
  }

  async ngOnInit() {
  }

  async login() {
    console.log(this.username + ' / ' + this.password);
    if (this.loginForm.valid === true) {
      if (this.username.match('DriftlonAdmin') && this.password.match('BrutalLazyJ')) {
        this.router.navigateByUrl('/info');
      } else {
        this.errMsg = 'Login fehlgeschlagen!';
      }
    }
  }
}
