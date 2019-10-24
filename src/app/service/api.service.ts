import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
// import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://reqres.in/api/';

  login(loginPayload: {email: string,password: string}) {
    //return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
    return this.http.post(this.baseUrl+'login',loginPayload);
  }

  getUsers() {
    return this.http.get(this.baseUrl+'users?per_page=12');
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + 'users/'+id);
  }

  createUser(userPayload){
    return this.http.post(this.baseUrl+'users',userPayload);
  }

  // updateUser(user: User): Observable<ApiResponse> {
  //   return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  // }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }
}