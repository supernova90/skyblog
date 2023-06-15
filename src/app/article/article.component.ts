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
  @Input()
  comments: Array<any>

  constructor() {
    this.title = 'my blog';
    this.content = 'hello world';
    this.comments = []
  }
}