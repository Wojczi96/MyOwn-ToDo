import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { USERS_LIST } from './users-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = USERS_LIST;
}
