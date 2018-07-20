import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropDownComponent  } from './drop-down.component';
@NgModule({
    imports: [
    CommonModule,
    FormsModule
    
],
declarations: [
    DropDownComponent
    ],
    exports:[DropDownComponent]
})
export class DropDownModule { }
