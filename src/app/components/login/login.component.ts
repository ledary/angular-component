import { Component, OnInit, ViewChild,Input,Output,EventEmitter } from '@angular/core';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  constructor(   
  ) { }
  @Input() buttonName:string;
  @Output() buttonEmit= new EventEmitter<any>();
userCode:string;
password:string;
  ngOnInit() {
  }
  
login(){
  let user = new User();
  user.userCode = this.userCode;
  user.password = this.password;
  this.buttonEmit.emit(user);
}




}
export class User{
  userCode:string;
  password:string;
}
