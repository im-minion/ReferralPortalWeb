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

@NgModule({
  declarations: [MessageComponent, LoaderComponent, RpTableComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [ MessageComponent, LoaderComponent, RpTableComponent ]
})
export class SharedModule { }
