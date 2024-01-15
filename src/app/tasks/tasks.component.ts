import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import{Task} from '../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, HttpClientModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => (
      this.tasks = this.tasks.filter((t) => t.id !== task.id)));
      console.log("Task deleted successfully");  
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }


}
