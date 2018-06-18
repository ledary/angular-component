import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { curriculumRoutes  } from './curriculum.route';
import { ViewSuggestionComponent  } from './view-suggestion/view-suggestion.component';
import {  ViewSingleOptionComponent  } from './view-single-option/view-single-option.component';
import {  ViewMultipleOptionComponent  } from './view-multiple-option/view-multiple-option.component';
import { ViewSelectTopComponent  } from './view-select-top/view-select-top.component';
@NgModule({
  declarations: [
    ViewSuggestionComponent,
    ViewSingleOptionComponent,
    ViewMultipleOptionComponent,
    ViewSelectTopComponent
  ], 

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(curriculumRoutes)

  ]
 

})
export class CurriculumModule { }
