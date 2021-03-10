import { Component, OnInit } from '@angular/core';

import { HttpService } from "../http.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    // Using getUserList() function to get users

    // this._http.getUserList().subscribe(data => {
    //   this.users = data;
    // });

   this._http.getUserList().then(data => {
     this.users = data;
   });  
  }
}
