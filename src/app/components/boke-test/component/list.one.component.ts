import {
    Component,
    Input,
    ElementRef
} from '@angular/core';


import {GetDataService} from '../service/get.data.service';



@Component({
    selector: 'app-list',
    templateUrl:'../template/list.one.html'
})
export class ListOneComponent {
    // 按钮配置项
    @Input()
    config: Object;

    constructor(private service: GetDataService) {
            this.service.getData("WGP");
        
    }

}
