import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  today: Date = new Date();

  constructor() {
    this.todos = [];
  }

  ngOnInit() {
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    this.todos.push({
      done: false,
      text: text
    });
  }

}
