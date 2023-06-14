import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input()
  title: string;
  @Input()
  content: string;

  constructor() {
    this.title = 'my blog';
    this.content = 'hello world';
  }
}