import { TestBed} from '@angular/core/testing';
import { TodoStorage } from './todoStorage.service';
import { Todo } from '../models/todo.model';

describe('Check TodoStorage service', () => {
  let arrLengtStart: number;
  let arrLengtEnd: number;
  let storage: TodoStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStorage]
    });

    storage = TestBed.get(TodoStorage);
  });

  it('check service add todo', () => {
    arrLengtStart = storage.todos.length;

    storage.add('testTodo');
    arrLengtEnd = storage.todos.length;

    expect(storage.todos[arrLengtEnd - 1].title).toEqual('testTodo');
    expect(arrLengtEnd).toEqual(arrLengtStart + 1);
  });

  it('check service remove todo', () => {
    storage.todos = [
      {title: 'todo1', completed: false},
      {title: 'todo2', completed: true}
      ];
    arrLengtStart = storage.todos.length;
    const todo: Todo = storage.todos[0];

    storage.remove(storage.todos[0]);
    arrLengtEnd = storage.todos.length;

    expect(storage.todos).not.toContain(todo);
    expect(arrLengtEnd).toEqual(arrLengtStart - 1);
  });
});
