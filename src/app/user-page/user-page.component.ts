import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as EventEmitter from 'events';

import { HttpService } from "../http.service";

// interface Users { }

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})


export class UserPageComponent implements OnInit {

  id: string;
  userId: number;
  users: any;
  userToShow: Object;
  userToShowName: any;

  constructor(
    private route: ActivatedRoute,
    private _http: HttpService
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      if (document.getElementById('no-user')) {
        document.getElementById('no-user').classList.remove('faded');
      }
    }, 500);


    // Filtering data to show for unique user 

    this.route.params.subscribe(params => {
      // this._http.getUserList().subscribe(data => {
      //   this.users = data;
      //   this.userToShow = this.users.find(e => e.username === params.id);
      // });

      this._http.getUserList().then(data => {
          this.users = data;
          this.userToShow = this.users.find((e: { username: any; }) => e.username === params.id);
      });
    });
  }

}
