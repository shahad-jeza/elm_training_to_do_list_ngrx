import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { addTask, deleteTask, toggleTaskCompletion } from './task.actions';
import { map, withLatestFrom } from 'rxjs/operators';
import { selectTasks } from './task.selectors';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}

  // Effect to persist tasks to LocalStorage
  saveTasks$ = createEffect(
    () =>
      this.actions$.pipe(
        // Listen for these actions
        ofType(addTask, deleteTask, toggleTaskCompletion),
        // Get the latest state of tasks from the store
        withLatestFrom(this.store.select(selectTasks)),
        // Save tasks to LocalStorage
        map(([action, tasks]) => {
          localStorage.setItem('tasks', JSON.stringify(tasks));
        })
      ),
    { dispatch: false } // This effect does not dispatch a new action
  );
}