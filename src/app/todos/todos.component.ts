import { useAnimation, trigger, transition, style, animate } from "@angular/animations";
import { Component } from "@angular/core";
import { bounceOutLeftAnimation } from "app/animations";

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(2000)
      ]),
      transition(':leave', useAnimation(bounceOutLeftAnimation)),
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
