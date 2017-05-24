import {Todo} from '../models/todo.model';

export class TodoStorage {
  todos = [
    new Todo('todo1')
  ];

  add(titleValue: String): void {
    this.todos.push(new Todo(titleValue));
  }

  remove(todo: Todo): void {
    const todoInd = this.todos.indexOf(todo);
    this.todos = this.todos.filter((item , i) => {
      if (i !== todoInd ) {

        return todo;
      }
    });
  }
}
