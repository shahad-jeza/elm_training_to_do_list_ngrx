import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectTasks } from '../store/task.selectors';
import { deleteTask, toggleTaskCompletion } from '../store/task.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  get tasks$() {
    return this.store.select(selectTasks);
  }

  constructor(private store: Store) {}

  onDeleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }

  onToggleCompletion(id: number) {
    this.store.dispatch(toggleTaskCompletion({ id }));
  }
}