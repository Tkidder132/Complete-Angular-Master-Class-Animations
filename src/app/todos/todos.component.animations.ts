import { useAnimation, trigger, transition, style, animate, query, animateChild, group, stagger } from "@angular/animations";
import { fadeInAnimation, bounceOutLeftAnimation } from "app/animations";

export const todosAnimation = trigger('todosAnimation', [
    transition(':enter', [
      group([
        query('h1', [
          style({ transform: 'translateY(-20px)' }),
          animate(250)
        ]),
        query('@todoAnimation', 
          stagger('200ms', animateChild())
        )
      ])
    ])
]);

export const todoAnimation = trigger('todoAnimation', [
    transition(':enter', [
      useAnimation(fadeInAnimation, {
        params: {
          duration: '500ms',
          easing: 'ease-out'
        }
      })
    ]),
    transition(':leave', [
      style({ backgroundColor: 'red' }),
      animate(1000),
      useAnimation(bounceOutLeftAnimation)
    ])
]);