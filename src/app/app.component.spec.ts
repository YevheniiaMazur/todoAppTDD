import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Todo } from './models/todo.model';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let todo: Todo;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  // it('should create the app', async(() => {
  //   expect(app).toBeTruthy();
  // }));

  it('check add todo with title', () => {
    spyOn(app.todoStore, 'add');
    const todoFormAdd = {
      value: {todo: 'todoName'}
      // reset: res => res
    };
    app.addTodo(todoFormAdd);

    expect(app.todoStore.add).toHaveBeenCalledWith('todoName');
    expect(app.newTodoTitle).toEqual('');
  });

  it('check add todo without title', () => {
    spyOn(app.todoStore, 'add');
    const todoFormAdd = {
      value: {todo: ''}
    }
    app.addTodo(todoFormAdd);

    expect(app.todoStore.add).not.toHaveBeenCalled();
  });

  it('check remove todo', () => {
    spyOn(app.todoStore, 'remove');
    app.removeTodo(todo);

    expect(app.todoStore.remove).toHaveBeenCalledWith(todo);
  });

  it('check change todo status', () => {
    todo = new Todo('new todo');

    app.changeTodoStatus(todo);

    expect(todo.completed).toBeTruthy();
  });

  it('check filter active with active todo', () => {
    app.todoStore.todos = [
      new Todo('todo')
    ];

    app.filterActiveTodo();

    expect(app.filterTodo).toContain(app.todoStore.todos[0]);
  });

  it('check filter active with completed todo', () => {
    app.todoStore.todos = [
      new Todo('todo')
    ];
    app.todoStore.todos[0].completed = true;

    app.filterActiveTodo();

    expect(app.filterTodo).not.toContain(app.todoStore.todos[0]);
  });

  it('check filter completed with completed todo', () => {
    app.todoStore.todos = [
      new Todo('todo')
    ];

    app.todoStore.todos[0].completed = true;
    app.filterCompletedTodo();

    expect(app.filterTodo).toContain(app.todoStore.todos[0]);
  });

  it('check filter completed with active todo', () => {
    app.todoStore.todos = [
      new Todo('todo')
    ];

    app.filterCompletedTodo();

    expect(app.filterTodo).not.toContain(app.todoStore.todos[0]);
  });

  it('check filter all', () => {

    app.filterAllTodo();
    expect(app.filterTodo).toEqual(app.todoStore.todos);
  });

  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
