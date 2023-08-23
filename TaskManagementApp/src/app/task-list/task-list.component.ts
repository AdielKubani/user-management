import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  public tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() : void {
    this.taskService.getTasks().subscribe(result => this.tasks = result)
  }
}
