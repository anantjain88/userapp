import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  addUser: FormGroup;
  invalidAddUser: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  onSubmit() {
    if (this.addUser.invalid) {
      return;
    }
    const userPayload = {
      firstname: this.addUser.controls.firstname.value,
      lastname: this.addUser.controls.lastname.value,
      email: this.addUser.controls.username.value
    };
    this.apiService.createUser(userPayload).subscribe(
      (response: any) => {
        this.router.navigate(["users"]);
      },
      error => {
        this.invalidAddUser = true;
      }
    );
  }

  ngOnInit() {
    // window.localStorage.removeItem('token');
    if (!window.localStorage.token) {
      this.router.navigate(["login"]);
    } else {
      this.addUser = this.formBuilder.group({
        username: ["", Validators.compose([Validators.required])],
        firstname: ["", Validators.required],
        lastname: ["", Validators.required]
      });
    }
  }
}
