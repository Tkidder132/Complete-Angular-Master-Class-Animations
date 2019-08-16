import { Component, Input } from '@angular/core';
import { useAnimation, trigger, transition, style, animate, query, animateChild, group, stagger, state } from "@angular/animations";

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden'
      })),

      transition('collapsed => expanded', [
        animate('250ms ease-out')
      ]),

      transition('expanded => collapsed', [
        animate('250ms ease-in')
      ])
    ])
  ]
})

export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
