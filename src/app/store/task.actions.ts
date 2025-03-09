import { createAction, props } from '@ngrx/store';

export const addTask = createAction('[Task] Add Task', props<{ task: string }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());
export const toggleTaskCompletion = createAction('[Task] Toggle Task Completion', props<{ id: number }>()); // number to specify the task by id 