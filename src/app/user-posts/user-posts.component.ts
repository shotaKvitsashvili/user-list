import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "../http.service";

import { UserPageComponent } from '../user-page/user-page.component';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  id: any;
  userId: any;
  users: any;
  userPosts: any;
  userPostsToShow: Object;
  postAuthor: string;
  // userPostsToShowName: any;

  constructor(
    private route: ActivatedRoute,
    private _http: HttpService,
    // public userPage: UserPageComponent
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      // Get user to use for filtering

      this._http.getUserList().then(data => {
        this.users = data;
        this.postAuthor = this.users.find((i: { username: any; }) => i.username === param.id).name;
      })

      // Get user posts to filter correct one

        this._http.getUserPosts().then(data => {
          this.userId = this.users.filter((i: { username: any; }) => i.username === param.id);
          this.id = this.userId.map((i: { id: any; }) => i.id);
          this.userPosts = data;
          this.userPostsToShow = this.userPosts.filter((i: { userId: any; }) => i.userId === this.id[0]);
      });
    })
  }
}
