import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { LoaderComponent } from './loader/loader.component';
import { RpTableComponent } from './rp-table/rp-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PercentProgressPipe } from './percent-progress.pipe';
import { RpDatagridComponent } from './rp-datagrid/rp-datagrid.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [MessageComponent, LoaderComponent, RpTableComponent, PercentProgressPipe, RpDatagridComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ClarityModule
  ],
  exports: [ MessageComponent, LoaderComponent, RpTableComponent, RpDatagridComponent ]
})
export class SharedModule { }
