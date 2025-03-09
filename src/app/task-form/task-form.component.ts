import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() addTaskEvent = new EventEmitter<string>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.addTaskEvent.emit(this.taskForm.value.task);
      this.taskForm.reset();
    }
  }
}