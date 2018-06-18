import { CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {DataTableComponent} from "./datatable.component";
import { ModalService } from './modal.service';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    DataTableComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
   FileUploadModule
  ],
  providers:[ModalService],
  exports:[DataTableComponent]

})
export class DataTableModule {
  
 }
