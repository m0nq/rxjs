import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'RxJS';
  mySubject;

  ngOnInit() {
    this.mySubject = new BehaviorSubject(200);

    this.mySubject.subscribe(x => console.log('First subscriber', x));
    this.mySubject.next(1);
    this.mySubject.next(2);
    // this.mySubject.unsubscribe();

    this.mySubject.subscribe(x => console.log('Second subscriber', x));
    this.mySubject.next(3);
  }

  ngOnDestroy() {
    this.mySubject.unsubscribe();
  }
}
