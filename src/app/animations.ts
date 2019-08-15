import { animation, animate, keyframes, style, trigger, state, transition, useAnimation } from "@angular/animations";


export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({ 
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({ 
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
);

export const fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        animate(500)
    ])
]);

export const slide = trigger('slide', [
    transition(':enter', [
        animate(500, style({ transform: 'translateX(-10px)' }))
    ]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
