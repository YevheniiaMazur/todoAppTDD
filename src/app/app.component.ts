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
    const activeTodo: Todo[] = [];
    const completedTodo: Todo[] = [];
    const allTodo: Todo[] = this.todoStore.todos;

    allTodo.forEach(item => {
      if (!item.completed) {
        activeTodo.push(item);
      } else {
        completedTodo.push(item);
      }
    });

    switch (filterName) {
      case 'ALL':
        this.filterArray = allTodo;
        break;

      case 'COMPLETED':
        this.filterArray = completedTodo;
        break;

      case 'ACTIVE':
        this.filterArray = activeTodo;
        break;

      default:
        break;
    }
  }
}
