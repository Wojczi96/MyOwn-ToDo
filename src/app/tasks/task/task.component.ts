import { Component, input, output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>()

  onCompleteTask(){
    this.complete.emit(this.task().id)
  }
}
