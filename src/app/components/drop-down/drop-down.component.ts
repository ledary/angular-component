/**
 * 下拉框组件 -武刚鹏-2017年9月30日14:54:45
 */


import {
    NgModule, Component, OnInit, OnChanges, Input, Output, EventEmitter
} from '@angular/core';

import { InputHandler } from '../util/inputhandler';
import { ObjectUtils } from '../util/objectutils';




@Component({
    selector: 'p-dropdown',

    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.css'],
    providers: [InputHandler, ObjectUtils]
})
export class DropDownComponent implements OnInit, OnChanges {

    //SelectData为下拉菜单的数据结构   id默认为空
    @Input() selectValue = new SelectData("", "--请先选择--")
    active = "false";

    //下拉菜单要显示所有下拉菜单，为数组结构
    @Input() data = new Array();
    //菜单的id值，每个id唯一标识一个菜单
    @Input() dataId;
    //菜单显示的菜单名字。
    @Input() dataValue;

    //选择菜单事件，选择一个菜单，即把该选择的菜单发射出去
    @Output() select = new EventEmitter();

    //搜索过滤值
    filterValue = "";

    //用于显示的所有菜单 
    optionsToDisplay = new Array();

    //根据value值进行过滤
    filterBy = "value";
    constructor(private inputhandler: InputHandler,
        private objectutils: ObjectUtils) {
    }
    ngOnInit() {
        if ( this.data!=null &&  this.data.length > 0) {
            this.optionsToDisplay = this.data.concat();
        } else {
            
            this.optionsToDisplay = new Array();
        }
    }

    ngOnChanges() {
        this.optionsToDisplay = this.data;
    }

//选中菜单时
    activeValue(e: HTMLElement, a: HTMLElement, event: Event) {
        if (a.id == null || a.id == "") {
            this.selectValue.value = a.innerText;
            this.selectValue.id = a.id;
            this.select.emit(this.selectValue);
            return;
        }
        this.selectValue.value = a.innerText;
        this.selectValue.id = a.id;
        if (e.classList.contains("open")) {
            e.classList.remove("open");
        } else {
            e.classList.add("open");
        }
        event.stopPropagation();
        this.select.emit(this.selectValue);
    }

//过滤字符，进行菜单的搜索
    onFilter(event): void {
        if(this.optionsToDisplay && this.optionsToDisplay.length){
            this.optionsToDisplay.length = 0;            
        }
        let inputValue = this.objectutils.trim(event.target.value.toLowerCase());

        //对输入的字符进行非空限制
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.optionsToDisplay = this.activateFilter();
        }
        else {
            console.log(this.optionsToDisplay);
            this.filterValue = null;
            this.optionsToDisplay = this.data.concat();
            console.log(this.optionsToDisplay);

        }
    }

    activateFilter() {
        let searchFields: string[] = this.dataValue.split(',');
        if (this.data && this.data.length) {
            return this.objectutils.filter(this.data, searchFields, this.filterValue);
        }
    }







}

export class SelectData {
    id: string;
    value: string;
    constructor(id: string, value: string) {
        this.id = id;
        this.value = value;
    }
}




