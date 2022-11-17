import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  string: string;
  number: number;
  obs$ = of(0, 1, 2, 3);
  obs$1 = of(4, 5, 6, 7);

  


  people = ['Alin', 'Maria', 'Vlad'];

  constructor() {}

  ngOnInit() {
    this.string = 'cevaaa';
    combineLatest([this.obs$ , this.obs$1]).subscribe((data) => {
      console.log(data, 'cummm');
    });
  }

  valueNumber(event) {
    this.number = event;
    console.log(event, 'event');
  }
}
