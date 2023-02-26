import { fromEvent, interval, switchMap } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(switchMap(event => {
    return interval(100)
      .pipe(
        tap(v => console.log('Tap: ', v)),
        take(10),
        reduce((acc, v) => acc + v, 0)
      );
  }))
  .subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('complete'),
  });

// const stream$ = interval(1000)
//   .pipe(
//     tap(v => console.log("Tap: ", v)),
//     // map(v => v * 3),
//     // filter(v => v % 2 === 0),
//     take(10),
//     takeLast(5),
//     // takeWhile(v => v < 7),
//     // scan((acc, v) => acc + v, 0)
//     reduce((acc, v) => acc + v, 0)
//   );
//
// stream$.subscribe({
//   next: v => console.log('Next: ', v),
//   complete: () => console.log("complete"),
// });
