import { Component, inject} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { USERS_LIST } from './users-list';
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from './tasks/task/task.model';
import { TasksService } from './tasks/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserListComponent, TasksComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = USERS_LIST;
  selectUserId?: string;
  selected!: string;
  isOpen = false;
  taskService = inject(TasksService);

  get selectUser(){
    return this.users.find((user) => user.id === this.selectUserId)!;
  }
  onSelectedUser(id: string){
    this.selectUserId = id;
    this.selected = this.selectUserId;
  }

  isNewTaskOpen(task: boolean){
    this.isOpen = task;
  }
  newTaskData(newTask: Task){
      console.log(newTask)
  }
}
