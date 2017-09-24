import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService{
  data;
  constructor(private http:Http){
  this.getUser();
  this.getPosts();
}
getUser()

    {
      
     return this.http.get("http://jsonplaceholder.typicode.com/users/1");
     //return this.data;
     }

     getPosts(){
      return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");

     }
     
}
