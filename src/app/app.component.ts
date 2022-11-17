import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { WhetherApiService } from './whether-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly unsubscriber$: Subject<void> = new Subject();
  name = 'Angular ' + VERSION.major;

  place$: Observable<any>;

  constructor(private whetherApiService: WhetherApiService) {}

  ngOnInit() {
    this.place$ = this.whetherApiService
      .getWhether()
      .pipe(map((i) => i.response));
    // .pipe(takeUntil(this.unsubscriber$))
    // .subscribe((data) => {
    //   console.log(data, 'data2');
    //   console.log(data.response[0].place.name, 'name');

    // });

    this.whetherApiService
      .getWhether()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((data) => {
        console.log(data, 'data2');
        console.log(data.response[0].place.name, 'name');
      });

    this.whetherApiService.getNumber().subscribe((data: number) => {
      console.log(data, 'data1');
    });
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
