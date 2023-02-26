import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

document.addEventListener('click',() => {
  const stream$ = new ReplaySubject(2)

  stream$.next("losos")
  stream$.next("karas")
  stream$.next("sudak")

  stream$.subscribe(v => console.log(v))

})
