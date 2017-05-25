import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Todo } from './models/todo.model';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let todo: Todo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    todo = new Todo('todoName');
  });

  it('check add todo with title', () => {
    spyOn(app.todoStore, 'add');
    const todoFormAdd = {
      value: {todo: 'todoName'},
      reset: res => res
    };

    app.addTodo(todoFormAdd);

    expect(app.todoStore.add).toHaveBeenCalledWith('todoName');
    expect(app.newTodoTitle).toEqual('');
  });

  it('check add todo without title', () => {
    spyOn(app.todoStore, 'add');
    const todoFormAdd = {
      value: {todo: ''}
    };

    app.addTodo(todoFormAdd);

    expect(app.todoStore.add).not.toHaveBeenCalled();
  });

  it('check remove todo', () => {
    spyOn(app.todoStore, 'remove');

    app.removeTodo(todo);

    expect(app.todoStore.remove).toHaveBeenCalledWith(todo);
  });

  it('check filter active with active todo', () => {
    app.todoStore.todos = [todo];

    app.filterTodo('ACTIVE');

    expect(app.filterArray).toContain(app.todoStore.todos[0]);
  });

  it('check filter active with completed todo', () => {
    app.todoStore.todos = [todo];
    app.todoStore.todos[0].completed = true;

    app.filterTodo('ACTIVE');

    expect(app.filterArray).not.toContain(app.todoStore.todos[0]);
  });

  it('check filter completed with completed todo', () => {
    app.todoStore.todos = [todo];
    app.todoStore.todos[0].completed = true;

    app.filterTodo('COMPLETED');

    expect(app.filterArray).toContain(app.todoStore.todos[0]);
  });

  it('check filter completed with active todo', () => {
    app.todoStore.todos = [todo];

    app.filterTodo('COMPLITED');

    expect(app.filterArray).not.toContain(app.todoStore.todos[0]);
  });

  it('check filter all', () => {

    app.filterTodo('ALL');

    expect(app.filterArray).toEqual(app.todoStore.todos);
  });
});
