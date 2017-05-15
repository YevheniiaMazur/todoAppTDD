import { TodoAppTddPage } from './app.po';

describe('todo-app-tdd App', () => {
  let page: TodoAppTddPage;

  beforeEach(() => {
    page = new TodoAppTddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
