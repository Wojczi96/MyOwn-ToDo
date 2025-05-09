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
  name = input<string>()
  isOpen = false;
  newTaskForm = new FormGroup({
    title: new FormControl(''),
    summary: new FormControl(''),
    date: new FormControl('')
  })


  onOpenForm(){
    this.isOpen = !this.isOpen;
  }
  onSumbit(){
    console.log("Clicked")
    console.log(this.newTaskForm.value)
  }
}
