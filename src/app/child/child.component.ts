import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WhetherApiService } from '../whether-api.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() stringul: string;
  @Output() numberValue = new EventEmitter<number>();

  myForm: FormGroup;

  clickCount: number = 0;

  constructor(
    private whetherApiService: WhetherApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      password: '',
    });
  }

  countChange(value: number) {
    value++;
    this.clickCount = value;
    console.log(this.clickCount, 'clickCount');
    this.numberValue.emit(this.clickCount);

    this.whetherApiService.setNumber(2);
  }

  onSubmit(form) {
    console.log(form.value, 'form');
  }
}
