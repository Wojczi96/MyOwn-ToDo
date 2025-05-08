import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { USERS_LIST } from './users-list';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserListComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = USERS_LIST;
  selectUserId?: string;

  get selectUser(){
    return this.users.find((user) => user.id === this.selectUserId)!;
  }
  onSelectedUser(id: string){
    this.selectUserId = id;
  }
}
