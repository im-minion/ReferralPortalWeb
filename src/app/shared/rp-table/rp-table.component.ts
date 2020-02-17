import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { ReferralLevels } from 'src/app/app.constants';
import { TableDataService } from 'src/app/services/shared-service/table-data.service';

declare var $: any;
@Component({
  selector: 'app-rp-table',
  templateUrl: './rp-table.component.html',
  styleUrls: ['./rp-table.component.scss']
})
export class RpTableComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<any> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output()
  clicked = new EventEmitter<any>();

  constructor(private tableDataService: TableDataService) { }

  ngOnInit() {
    // this.displayedColumns = this.columns;
    // this.dataSource = new MatTableDataSource(this.source);

    this.tableDataService.dataSource$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.tableDataService.displayedColumns$.subscribe((data) => {
      this.displayedColumns = data;
    })
  }

  applyFilter(filterValue: string) {
    if (!isNullOrUndefined(this.dataSource)) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  click(data: any) {
    this.clicked.emit(data);
  }

  getProgress(currentLevel: string) {
    switch (currentLevel) {
      case ReferralLevels.RESUME_SCREENING:
        return '25%';
      case ReferralLevels.L1:
        return '50%';
      case ReferralLevels.L2:
        return '75%';
      case ReferralLevels.HR:
        return '100%';
      default:
        return 'NONE'
    }
  }

}
