import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogInService } from 'src/app/Serives/log-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  
  loginForm!: FormGroup;
  showPassword: boolean = false;
 
  constructor(private loginService: LogInService) { }
 
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    })
  }
 
  async login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    // this.loginService.login(username, password);
  }

}
