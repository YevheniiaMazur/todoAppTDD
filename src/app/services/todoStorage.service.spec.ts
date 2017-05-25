import { TestBed } from '@angular/core/testing';

import { TodoStorage } from './todoStorage.service';
import { Todo } from '../models/todo.model';

describe('Check TodoStorage service', () => {
  let arrLengthStart: number;
  let arrLengthEnd: number;
  let storage: TodoStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStorage]
    });

    storage = TestBed.get(TodoStorage);
  });

  it('check service add todo', () => {
    arrLengthStart = storage.todos.length;

    storage.add('testTodo');
    arrLengthEnd = storage.todos.length;

    expect(storage.todos[arrLengthEnd - 1].title).toEqual('testTodo');
    expect(arrLengthEnd).toEqual(arrLengthStart + 1);
  });

  it('check service remove todo', () => {
    storage.todos = [
      {title: 'todo1', completed: false},
      {title: 'todo2', completed: true}
    ];
    arrLengthStart = storage.todos.length;
    const todo: Todo = storage.todos[0];

    storage.remove(storage.todos[0]);
    arrLengthEnd = storage.todos.length;

    expect(storage.todos).not.toContain(todo);
    expect(arrLengthEnd).toEqual(arrLengthStart - 1);
  });

  it('check change todo status', () => {
    const todo: Todo = new Todo('newTodo');

    storage.changeTodoStatus(todo);

    expect(todo.completed).toBeTruthy();
  });
});
