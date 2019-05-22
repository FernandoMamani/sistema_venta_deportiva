import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iso-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }
  register() {
    console.log(this.email, this.password);
  }
}