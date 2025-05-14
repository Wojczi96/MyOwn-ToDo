import { Injectable } from '@angular/core';
import { type NewTask, type Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  userId!: string;
  isOpen = false;

  protected tasks = [
    {
      id: 1,
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 2,
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 3,
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() { }

  getAllTasks(): Task[]{
    return this.tasks;
  }

  getTaskById(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(task: NewTask, userId: string){
   return this.tasks.push({
    id: this.tasks.length +1,
    userId: userId,
    title: task.title,
    summary: task.summary,
    dueDate: task.dueDate
   });
  }

//   get selectedUserTask(){
//     return this.tasks.filter((task) => task.userId === this.userId)
//   }


  onCompleteTask(id: number){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

//   public onOpenForm(): boolean {
    // console.log(this.isOpen)
    // return this.isOpen = true;
    // this.newTaskIsOpen.emit(this.isOpen);
//   }

//   onSumbit(){
//     // const taskData = this.newTaskForm.value;
//     // if (taskData.title && taskData.summary && taskData.date) {
//       this.tasks.push({
//         id: new Date().getTime().toString(),
//         userId: this.userId, 
//         title: taskData.title,
//         summary: taskData.summary,
//         dueDate: taskData.date,
//       });
//       // this.isOpen = false; 
//       // this.newTaskForm.reset();
//     }
//   }
}
