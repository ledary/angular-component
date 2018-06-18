import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {InscriptionManageComponent} from './inscription-manage.component';
import {InscriptionRoutes} from './inscription-manage.routes';

import {QuestionnaireModule} from './questionnaire/questionnaire.module';
import {DataTableModule} from 'ng-itoo-datatable';

import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    DataTableModule,
    QuestionnaireModule,
    CommonModule,
    FileUploadModule,
    RouterModule.forChild(InscriptionRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InscriptionManageComponent
  ]
})
export class InscriptionManageModule {
}
