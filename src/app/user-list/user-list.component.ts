import { Component, input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  user = input.required<User>()

  get imagePath(){
    return '/assets/users/' + this.user().avatar
  }
}
