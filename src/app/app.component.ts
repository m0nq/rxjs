import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'RxJS';
  mySubject;

  ngOnInit() {
    const numbers = interval(1000);

    numbers
      .pipe(take(5))
      .pipe(map(x => x * 10))
      .subscribe(x => console.log('Next: ', x));
  }

  ngOnDestroy() {
    this.mySubject.unsubscribe();
  }
}
