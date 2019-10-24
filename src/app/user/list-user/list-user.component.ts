import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.getUsers(1)
  }

  getUsers(page){
  	this.page = page;
  	this.apiService.getUsers(page).subscribe(data => {
        this.users = data.data;
    });
  }

  viewUser(user: User): void {
  	window.localStorage.removeItem("UserId");
    window.localStorage.setItem("UserId", user.id.toString());
  	this.router.navigate(['view-user']);
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}