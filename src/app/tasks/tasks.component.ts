import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  isOpen = false;
  newTaskForm = new FormGroup({
    title: new FormControl(''),
    summary: new FormControl(''),
    date: new FormControl('')
  })

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.userId())
  }

  onOpenForm(){
    this.isOpen = !this.isOpen;
  }
  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onSumbit(){
    const taskData = this.newTaskForm.value;
    if (taskData.title && taskData.summary && taskData.date) {
      this.tasks.push({
        id: new Date().getTime().toString(),
        userId: this.userId(), 
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });
      this.isOpen = false; 
      this.newTaskForm.reset();
    }
  }
}
