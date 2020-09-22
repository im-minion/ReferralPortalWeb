import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  declarations: [PercentProgressPipe, RpDatagridComponent],
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
  exports: [RpDatagridComponent]
})
export class SharedModule { }
