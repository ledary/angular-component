import { CommonModule } from '@angular/common';

import {NgModule} from '@angular/core';
import {ListOneComponent} from '../component/list.one.component';
import {NotFindComponent} from '../component/not.find.component';
import {GetDataService} from '../service/get.data.service';

const comlist = [
    NotFindComponent,
    ListOneComponent
]

@NgModule({
    declarations: comlist,
    imports: [
        CommonModule
    ],
    exports: comlist,
    providers: [
        GetDataService
    ]
})
export class CommonsModule {
}
