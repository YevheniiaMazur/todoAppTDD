import { TestBed, async, inject } from '@angular/core/testing';
import { TodoStorage } from './todoStorage.service';
import { Todo } from '../models/todo.model';

describe('Check TodoStorage service', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TodoStorage]
    }).compileComponents();
  }));

  it('should create an instance todoStorage', inject([TodoStorage], (service: TodoStorage) => {

    expect(service).toBeTruthy();
  }));

  it('check service add todo', inject([TodoStorage], (storage: TodoStorage) => {

    spyOn(storage.todos, 'push');
    storage.add('testTodo');

    expect(storage.todos.push).toHaveBeenCalledWith(new Todo('testTodo'));
  }));

  it('check service remove todo', inject([TodoStorage], (storage: TodoStorage) => {

    spyOn(storage.todos, 'splice');
    storage.remove(storage.todos[0]);

    expect(storage.todos.splice).toHaveBeenCalledWith(0, 1);
  }));
});
