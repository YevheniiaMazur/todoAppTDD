import { TestBed, inject } from '@angular/core/testing';
import { TodoStorage } from './todoStorage.service';
import { Todo } from '../models/todo.model';

describe('Check TodoStorage service', () => {
  let arrLengtStart: number;
  let arrLengtEnd: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStorage]
    });
  });

  it('should create an instance todoStorage', inject([TodoStorage], (service: TodoStorage) => {

    expect(service).toBeTruthy();
  }));

  it('check service add todo', inject([TodoStorage], (storage: TodoStorage) => {
    arrLengtStart = storage.todos.length;

    storage.add('testTodo');
    arrLengtEnd = storage.todos.length;

    expect(storage.todos[arrLengtEnd - 1].title).toEqual('testTodo');
    expect(arrLengtEnd).toEqual(arrLengtStart + 1);
  }));

  it('check service remove todo', inject([TodoStorage], (storage: TodoStorage) => {
    storage.todos = [{title: 'todo1', completed: false}, {title: 'todo2', completed: true}]
    arrLengtStart = storage.todos.length;
    const todo: Todo = storage.todos[0];

    storage.remove(storage.todos[0]);
    arrLengtEnd = storage.todos.length;

    expect(storage.todos).not.toContain(todo);
    expect(arrLengtEnd).toEqual(arrLengtStart - 1);
  }));
});
