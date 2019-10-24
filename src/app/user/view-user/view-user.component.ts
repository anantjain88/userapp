import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  	let userId = window.localStorage.getItem("UserId");
  	let userToken = window.localStorage.getItem("token");
  	this.show = false;
  	if(userId==null && !userToken) {
      this.router.navigate(['users']);
      return;
    }
    this.apiService.getUserById(userId)
      .subscribe( data => {
        this.user = data.data;
        this.show = true;
      });
  }

}
