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

  getUsers(page: number) {
    return this.http.get(this.baseUrl+'users?page='+page);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + 'users/'+id);
  }

  // createUser(user: User): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>(this.baseUrl, user);
  // }

  // updateUser(user: User): Observable<ApiResponse> {
  //   return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  // }

  // deleteUser(id: number): Observable<ApiResponse> {
  //   return this.http.delete<ApiResponse>(this.baseUrl + id);
  // }
}