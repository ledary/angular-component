import { Component, OnInit, AfterViewInit } from '@angular/core';

import { BaseService } from '../util/baseservice';




export class CascadMenuFactory {


    /*************级联菜单需要数据************** */
    menuUrl = []
    dataId = []
    dataValue = []
    menuLabl = []
    cascadMenus = []
    /********************************************************************* */


    public menudataInit(ds: BaseService) {

        let url = this.menuUrl[0];
        ds.getData(url, "GET").then(res => {
            this.cascadMenus[0] = res.data;

        })
    }

    public select(ds: BaseService, data: any, index: number) {
        let url = this.menuUrl[index];
        ds.getData(url, "GET").then(res => {
            if(res.data != null || res.data.length != null){
            this.cascadMenus[index] = res.data;
                
            }
        })
    }


}



