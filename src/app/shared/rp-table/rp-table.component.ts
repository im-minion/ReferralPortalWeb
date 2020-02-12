import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { Levels } from 'src/app/app.constants';

@Component({
  selector: 'app-rp-table',
  templateUrl: './rp-table.component.html',
  styleUrls: ['./rp-table.component.scss']
})
export class RpTableComponent implements OnInit {
  @Input()
  columns: string[] = null;
  
  @Input()
  source: Array<any> = null;
  
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
  rowClick(data: any) {
    console.log(data);
  }

  getProgress( currentLevel: string) {
    switch (currentLevel){
      case Levels.RESUME_SCREENING:
        return '25%';
      case Levels.L1:
        return '50%';
      case Levels.L2:
        return '75%';
      case Levels.HR:
        return '100%';
      default:
        return 'NONE'   
    }

  }

}
