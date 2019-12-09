import { Component, OnInit } from '@angular/core';
import { StudentService } from '@workshop/core-data';


@Component({
  selector: 'workshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: '/category', icon: 'face', title: 'Category'},
    { path: '/pfefile', icon: 'face', title: 'PFE Files'},

  ] 

  constructor( private studentService : StudentService) { }

  ngOnInit() {
   /*  this.studentService.findStudent(1).subscribe(res => {
      console.log(res)
    }) */
  }

}
