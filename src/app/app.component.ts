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
  filterTodo: Todo[];

  constructor() {
    this.filterAllTodo();
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
  }

  changeTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  filterActiveTodo(): void {
    const activeTodo: Todo[] = [];
    this.todoStore.todos.forEach(item => {
      if (!item.completed) {
        activeTodo.push(item);
      }
    });
    this.filterTodo = activeTodo;
  }

  filterComplitedTodo(): void {
    const complitedTodo: Todo[] = [];
    this.todoStore.todos.forEach(item => {
      if (item.completed) {
        complitedTodo.push(item);
      }

    });
    this.filterTodo = complitedTodo;
  }

  filterAllTodo(): void {
    this.filterTodo = this.todoStore.todos;
  }
}
