import { trigger, state, animate, style, transition } from '@angular/animations';

export const routerTransition =
  trigger('routerTransition', [
    // state('void', style({ position: 'fixed', width: '100%' })),
    // state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ transform: 'translateX(200%)', position: 'fixed', width: '100%' }),
      animate('0.6s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({ transform: 'translateX(0%)', position: 'fixed', width: '100%' }),
      animate('0.6s ease-in-out', style({ transform: 'translateX(-200%)' }))
    ])
  ])

export const routerTransition1 =
  trigger('routerTransition', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.6s', style({ opacity: 1 }))
    ])
  ]);


export const routerTransition2 =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('routerTransition', [

    // // end state styles for route container (host)
    // state('*', style({
    //   // the view covers the whole screen with a semi tranparent background
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   backgroundColor: 'rgba(0, 0, 0, 0.8)'
    // })),

    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({
        // start with the content positioned off the right of the screen,
        // -400% is required instead of -100% because the negative position adds to the width of the element
        right: '-400%',

        // start with background opacity set to 0 (invisible)
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }),

      // animation and styles at end of transition
      animate('.5s ease-in-out', style({
        // transition the right position to 0 which slides the content into view
        right: 0,

        // transition the background opacity to 0.8 to fade it in
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      }))
    ]),

    // route 'leave' transition
    transition(':leave', [
      // animation and styles at end of transition
      animate('.5s ease-in-out', style({
        // transition the right position to -400% which slides the content out of view
        right: '-400%',

        // transition the background opacity to 0 to fade it out
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }))
    ])
  ]);