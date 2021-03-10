import { Injectable } from '@angular/core';


// Importing Angular's HttpClient service to get data from API

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  // Using Angular's HttpClient service to get data from API

  async getUserList(): Promise<any> {
    const data = await this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
    return data;
  }

  async getUserPosts(): Promise<any> {
    const data = await this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    return data;
  }
}
