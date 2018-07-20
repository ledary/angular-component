import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentComponent  } from './component.component';
@NgModule({
    imports: [
    CommonModule,
    FormsModule
    
],
declarations: [
    ComponentComponent
    ],
    exports:[ComponentComponent]
})
export class ComponentModule { }
