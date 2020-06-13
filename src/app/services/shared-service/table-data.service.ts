import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  private dataSource: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null);

  private displayedColumns: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null);

  constructor() { }

  public dataSource$: Observable<Array<any>> = this.dataSource.asObservable();

  public displayedColumns$: Observable<Array<any>> = this.displayedColumns.asObservable();

  public changeDataSource(data: Array<any>) {
    this.dataSource.next(data);
  }

  public changeDisplayedColumns(data: Array<any>) {
    this.displayedColumns.next(data);
  }

  public clearData() {
    this.dataSource.next([]);
    this.displayedColumns.next([]);
  }
}
