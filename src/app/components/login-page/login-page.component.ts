import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms"
import { Md5 } from 'md5-typescript';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup = this.formBuilder.group({
    username: '', 
    password: ''
  })

  constructor(private formBuilder:FormBuilder, private socket:WebSocketService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var values = this.loginForm.value;
    var hashed_password = Md5.init(values.password);

    this.socket.loginRequest({
      userId: values.username, 
      password: hashed_password
    });
  }
}
