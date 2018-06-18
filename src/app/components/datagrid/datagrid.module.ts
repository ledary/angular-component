import { CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { PaginationModule } from 'ngx-bootstrap';

import {DataService} from "./share/dataservice";
import {DataGridComponent} from "./datagrid.component";
import { ModalService } from './modal.service';
import { ExponentialStrengthPipe } from './share/tranfmerpipe';


import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    DataGridComponent,
    ExponentialStrengthPipe
 
  ],

  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
   PaginationModule.forRoot(),
   FileUploadModule
  ],
  providers:[DataService,ModalService],
  exports:[DataGridComponent]

})
export class DataGridModule {
  
 }
