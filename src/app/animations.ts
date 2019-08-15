import { trigger, state, style, transition, animate } from "@angular/core";

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
    transition(':leave', [
        animate(500, style({ transform: 'translateX(-100%)' }))
    ])
]);
