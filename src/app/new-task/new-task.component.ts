import { Component, output, input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../tasks/task/task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent{
  newTask = output<Task>();
  isOpen = output<boolean>();
  taskService = inject(TasksService)
  addTask = output<{title: string, summary: string, data: string}>();
  userClicked = input.required<string>();
   newTaskForm = new FormGroup({
      title: new FormControl('', { nonNullable: true }),
      summary: new FormControl('', { nonNullable: true }),
      dueDate: new FormControl('', { nonNullable: true })
    })

  onSumbit(){
    const newTask = this.newTaskForm.value;
    console.log(newTask);
    if(newTask.title && newTask.summary && newTask.dueDate){
      this.taskService.addTask({
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      }, this.userClicked());

      const abc = this.taskService.getAllTasks();
      console.log(abc)
    }
    // const taskData = this.newTaskForm.value;
    // if (taskData.title && taskData.summary && taskData.date) {
    //   // this.tasks.push({
    //   this.newTask.emit({
    //     id: new Date().getTime().toString(),
    //     userId: this.userClicked(), 
    //     title: taskData.title,
    //     summary: taskData.summary,
    //     dueDate: taskData.date,
    //   })
    // // })
    //   // });
    //   this.newTaskForm.reset();
    //   this.isOpen.emit(false);
    }
    
  }
