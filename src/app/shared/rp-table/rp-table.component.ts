import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Referrals } from 'src/app/utilities/referrals-class';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-rp-table',
  templateUrl: './rp-table.component.html',
  styleUrls: ['./rp-table.component.scss']
})
export class RpTableComponent implements OnInit {
  @Input()
  columns: string[];
  
  @Input()
  source: Array<any>;
  
  displayedColumns: string[];
  dataSource: MatTableDataSource<any> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.columns;
    this.dataSource = new MatTableDataSource(this.source);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    if (!isNullOrUndefined(this.dataSource)) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

}
