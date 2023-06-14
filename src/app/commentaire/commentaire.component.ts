import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input()
  autheur: string;
  @Input()
  content: string;

constructor() {

  this.autheur = 'le monsieur';
  this.content = 'good';



}
}
