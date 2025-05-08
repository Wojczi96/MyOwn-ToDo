import { Component, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  user = input.required<User>();
  select = output<string>();

  get imagePath(){
    return '/assets/users/' + this.user().avatar
  }

  onSelectUser(){
    this.select.emit(this.user().id)
  }
}
