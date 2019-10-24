import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  users: []
  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.getUsers();
  }

  getUsers(){
  	this.apiService.getUsers().subscribe(data => {
        this.users = data.data;
    });
  }

  viewUser(user): void {
  	window.localStorage.removeItem("UserId");
    window.localStorage.setItem("UserId", user.id.toString());
  	this.router.navigate(['view-user']);
  }

  editUser(user): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  }

  deleteUser(user): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
      	console.log(data, 'data')
        this.users = this.users.filter(u => u !== user);
      })
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}