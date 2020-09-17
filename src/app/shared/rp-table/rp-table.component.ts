import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { ReferralLevels, ReferralStatus } from 'src/app/app.constants';
import { TableDataService } from 'src/app/services/shared-service/table-data.service';
import { HmService } from 'src/app/services/hm-services/hm.service';

@Component({
  selector: 'app-rp-table',
  templateUrl: './rp-table.component.html',
  styleUrls: ['./rp-table.component.scss']
})
export class RpTableComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any> = null;
  public isLoadingResume: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public _status =  ReferralStatus;

  @Output()
  clicked = new EventEmitter<any>();

  constructor(private tableDataService: TableDataService, private hmService: HmService) { }

  ngOnInit() {
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

  resume() {
    // this.employeeService.getFileByID(fileId);
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

  shouldDisable(row: any) {
    return (row.referralCurrentStatus === ReferralStatus.REJECTED) || (row.referralCurrentLevel === ReferralLevels.HR);
  }

  isDataAvailable(): boolean {
    if (!isNullOrUndefined(this.dataSource.data) && this.dataSource.data.length > 0)
      return true;
    else
      return false;
  }

  getFile(id: string) {
    this.isLoadingResume = true;
    this.hmService.getFileByID(id).subscribe(
      (response: any) => {
        this.downLoadFile(response, 'application/pdf');
      },
      (err) => {
        console.log(err);
        this.isLoadingResume = false;
      }
    );
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    console.log(url);
    let pwa = window.open(url);
    this.isLoadingResume = false;
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }

}
