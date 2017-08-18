import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodosComponent, TodoComponent, AddTodoComponent],
  exports: [TodosComponent]
})
export class TodoModule { }
