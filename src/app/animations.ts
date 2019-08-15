import { trigger, state, style, transition, animate } from "@angular/core";

export const fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        animate(1000)
    ])
]);

export const slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(1000)
    ])
]);
