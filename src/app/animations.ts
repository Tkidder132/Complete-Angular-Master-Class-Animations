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

export const fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate(500)
]);

export const fadeOutAnimation = animation([
    animate(500, style({ opacity: 0 }))
]);

export const fade = trigger('fade', [
    transition(':enter', useAnimation(fadeInAnimation)),
    transition(':leave', useAnimation(fadeOutAnimation))
]);

export const slide = trigger('slide', [
    transition(':enter', [
        animate(500, style({ transform: 'translateX(-10px)' }))
    ]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
