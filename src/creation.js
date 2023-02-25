import { fromEvent, interval, range, timer } from 'rxjs';
import { map } from 'rxjs/operators';

// const stream$ = of("Hello", "world", "!")
//
// stream$.subscribe(value => {
//     console.log(value);
// })

// const array$ = from([1,2,3,4,5])
//     .pipe(
//         scan((acc, v) => acc.concat(v), [])
//     )
//
// array$.subscribe(value => console.log(value))

// const stream$ = new Observable(observer => {
//     observer.next("first value")
//     setTimeout(() => observer.next("second value"), 1000)
//     setTimeout(() => observer.error("smth went wrong"), 3000)
//     observer.next("third value")
//     setTimeout(() => observer.next("the end"), 5000)
//
// })
//
// stream$.subscribe({
//         next: value => console.log(value),
//         error: err =>  console.error(err)
//     }
// )

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(map((e) => ({
//     x: e.offsetX,
//     y: e.offsetY,
//     ctx: e.target.getContext('2d'),
//   })))
//   .subscribe((pos) => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//   });
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
//
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });

// const sub = interval(500).subscribe(v => console.log(v))
//
// setTimeout(() => {
//   sub.unsubscribe()
// }, 4000)

// timer(2500).subscribe(v => console.log(v))

range(42, 10).subscribe(v => console.log(v))
