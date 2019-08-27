import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  ngOnInit() {
    fromEvent(document, 'click').subscribe(event => console.log(event.target));
  }

  ngOnDestroy() {
  }
}
