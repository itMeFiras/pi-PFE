import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '@workshop/core-data';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  connected_user;
  constructor(private studentService: StudentService) { }


  ngOnInit() {
    this.resetUser();

  }
  

  login(){
    
    // this.studentService.login(this.connected_user).subscribe( res => {     
    //     this.studentService.findStudent(res.id).subscribe(res1 => {
    //       console.log(res1)
    //     }) 
    // });

  }

  resetUser(){
    const emptyUser = {
      "name": "",
      "lastname": "",
      "birthdate": "",
      "password": "EspritPFE",
      "email": "mouheb.bzrii@gmail.com",
      "token": "",
      "lastConnect": "",
      "connected": "",
      "active": true,
      "notifiableEntity": null,
      "intershipagreement": null,
      "profile": null
  }

    this.connected_user = emptyUser;

  }

}
