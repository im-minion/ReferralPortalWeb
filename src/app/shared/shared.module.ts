import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [MessageComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ MessageComponent, LoaderComponent ]
})
export class SharedModule { }
