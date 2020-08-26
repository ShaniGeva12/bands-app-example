import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ni-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public loginError = '';
  private loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // test
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  submitForm() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(res => {
        if (res && res.length > 0) {
          this.authService.setUser(res[0]);
          this.router.navigateByUrl('/show-bands');
        } else {
          this.loginError = 'Incorrect User name or Password.';
        }
      });
    }
  }
}
