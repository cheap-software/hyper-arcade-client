import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Md5 } from 'md5-typescript';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signupForm:FormGroup = this.formBuilder.group({
    username: '',
    password: '', 
    re_password: ''
  });

  constructor(private formBuilder:FormBuilder, private socket:WebSocketService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.validatePassword()) {
      alert("Passwords don't match!");
      return;
    }

    var values = this.signupForm.value;    
    var hashed_password = Md5.init(values.password);
    this.socket.signUpRequest({
      userId: values.username, 
      password: hashed_password
    })
  }

  validatePassword(): boolean {
    var values = this.signupForm.value;
    return values.password === values.re_password
  }

  validateUsername(): boolean {
    return true;
  }
}
