import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {ViewUserComponent} from "./user/view-user/view-user.component";



const routes: Routes = [
  { path : '', component : LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ListUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'view-user' , component: ViewUserComponent }
];

export const routing = RouterModule.forRoot(routes);