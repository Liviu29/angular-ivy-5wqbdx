import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class WhetherApiService {
private _behaviorSubject = new BehaviorSubject<number>(1);
private _behaviorSubject$ = this._behaviorSubject.asObservable();

  private url = 'https://aerisweather1.p.rapidapi.com/sunmoon/ankara,tr';

  constructor(private httpClient: HttpClient) {}

  getWhether() {
    const headers = {
      'X-RapidAPI-Key': '246ded6f5bmshba69db76cfd5339p1e8de5jsnd0c53c284b74',
      'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com',
    };

    return this.httpClient.get<any>(this.url, { headers });
  }

  getNumber():Observable<number> {
    return this._behaviorSubject$;
  }

  setNumber(newValue: number) {
    this._behaviorSubject.next(newValue);
  }
}
