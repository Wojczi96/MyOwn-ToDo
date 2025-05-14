import { Component, inject, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewTaskComponent } from "../new-task/new-task.component";
import { TasksService } from './tasks.service';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  userId = input.required<string>();
  name = input<string>();
  newTaskIsOpen = output<boolean>();
  taskService = inject(TasksService);
  isOpen = false;

  taskList: Task[] = [];
  // isOpen = false;
  // newTaskForm = new FormGroup({
  //   title: new FormControl(''),
  //   summary: new FormControl(''),
  //   date: new FormControl('')
  // })

  // 

  get selectedUserTask(){
    return this.taskList.filter((task) => task.userId === this.userId())
  }

  constructor(){
    this.taskList = this.taskService.getAllTasks();
  }
  
  onOpenForm(){
    this.isOpen = true;
    this.newTaskIsOpen.emit(this.isOpen);
  }
  onCompleteTask(id: number){
    this.taskList = this.taskList.filter((task) => task.id !== id);
  }


  // onSumbit(){
  //   const taskData = this.newTaskForm.value;
  //   if (taskData.title && taskData.summary && taskData.date) {
  //     this.tasks.push({
  //       id: new Date().getTime().toString(),
  //       userId: this.userId(), 
  //       title: taskData.title,
  //       summary: taskData.summary,
  //       dueDate: taskData.date,
  //     });
  //     this.isOpen = false; 
  //     this.newTaskForm.reset();
  //   }
  // }
}
