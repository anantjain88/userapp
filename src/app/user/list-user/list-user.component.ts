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
  users: any
  isDelete:boolean = false;
  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['']);
      return;
    }
    this.getUsers();
  }

  getUsers(){
  	this.apiService.getUsers().subscribe((data:any) => {
        this.users = data.data;
    });
  }

  viewUser(id: number): void {
  	window.localStorage.removeItem("UserId");
    window.localStorage.setItem("UserId", id.toString());
  	this.router.navigate(['view-user']);
  }

  editUser(id:number): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", id.toString());
    this.router.navigate(['edit-user']);
  }

  deleteUser(user:any): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.isDelete = true;
        this.users = this.users.filter(u => u !== user);
      })
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
  logout(){
    window.localStorage.clear();
    this.router.navigate(['']);
  }
}