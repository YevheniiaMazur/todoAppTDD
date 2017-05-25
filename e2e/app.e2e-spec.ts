import { TodoAppTddPage } from './app.po';
import { browser } from 'protractor';

describe('todo-app-tdd App', () => {
  let page: TodoAppTddPage;

  beforeEach(() => {
    page = new TodoAppTddPage();
  });

  // it('should run app', () => {
  //   browser.get('#/typeahead');
  //   browser.sleep(10000);
  // }
  // it('should display message saying app works', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('app works!');
  // });
});
