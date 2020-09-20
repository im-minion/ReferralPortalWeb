import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { COLUMNS } from 'src/app/app.constants';
import { HmService } from 'src/app/services/hm-services/hm.service';

@Component({
  selector: "app-rp-datagrid",
  templateUrl: "./rp-datagrid.component.html",
  styleUrls: ["./rp-datagrid.component.scss"],
})
export class RpDatagridComponent implements OnInit {
  public isLoadingResume: boolean = false;
  @Input()
  public isDataLoading: boolean = false;
  @Input() columnsToDisplay: string[];
  @Input() allRows: Array<any>;
  @Output()
  clicked = new EventEmitter<any>();
  @Output()
  refreshed = new EventEmitter<any>();
  public columns = COLUMNS;
  constructor(private hmService: HmService) {}

  public selected: any;
  ngOnInit(): void {}

  public selectionChanged(event) {
    if(event) this.clicked.emit(this.selected);
  }

  public refresh(event) {
    this.refreshed.emit(true);
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
