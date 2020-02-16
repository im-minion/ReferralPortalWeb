import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  dataSource$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null);

  displayedColumns$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null);

  constructor() { }
  
  changeDataSource(data: Array<any>) {
    this.dataSource$.next(data);
  }

  changeDisplayedColumns(data: Array<any>) {
    this.displayedColumns$.next(data);
  }
}
