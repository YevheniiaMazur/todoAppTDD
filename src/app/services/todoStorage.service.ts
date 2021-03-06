import { Todo } from '../models/todo.model';

export class TodoStorage {
  todos = [
    new Todo('todo1')
  ];

  add(titleValue: String): void {
    this.todos.push(new Todo(titleValue));
  }

  remove(todo: Todo): void {
    this.todos = this.todos.filter(item  => item !== todo );
  }

  changeTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
