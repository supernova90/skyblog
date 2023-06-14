import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skyblog';
  articles: Array<any>;

  constructor() {
    this.articles = [
      { title: 'blog1', content: 'hello1' },
      { title: 'blog2', content: 'hello2' },
      { title: 'blog3', content: 'hello3' },
      { title: 'blog4', content: 'hello4' }
    ];
  }
}
