import { Component } from '@angular/core';

import { TodoStorage } from './services/todoStorage.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoStore: TodoStorage = new TodoStorage();
  newTodoTitle: String = '';
  filterArray: Todo[];

  constructor() {
    this.filterTodo('ALL');
  }

  addTodo(todoFormAdd): void {
    this.newTodoTitle = todoFormAdd.value.todo;
    if (this.newTodoTitle.trim().length) {
      this.todoStore.add(this.newTodoTitle);
      this.newTodoTitle = '';
      todoFormAdd.reset();
    }
  }

  removeTodo(todo: Todo): void {
    this.todoStore.remove(todo);
    this.filterArray = this.todoStore.todos;
  }

  filterTodo(filterName: string) {
    switch (filterName) {
      case 'ALL':
        this.filterArray = this.todoStore.todos;
        break;

      case 'COMPLETED':
        this.filterArray = this.todoStore.todos.filter(item => item.completed === true);
        break;

      case 'ACTIVE':
        this.filterArray = this.todoStore.todos.filter(item => item.completed === false);
        break;

      default:
        break;
    }
  }
}
