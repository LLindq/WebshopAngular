import { browser, by, element, By } from 'protractor';

export class AppPage {
    navigateTo() {
      return browser.get('/');
    }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  moveToAdmin(){
    return element(by.id('admin'))
  }
}
