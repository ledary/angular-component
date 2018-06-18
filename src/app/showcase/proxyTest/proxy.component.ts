import { Component, OnInit } from '@angular/core';

import { BaseService } from '../util/baseservice';


const EXPORT_URL = "/examinationEvaluation-web/papersManager/findExamPaperById/4mt5Tz7j7MyZnuTZnjERpM"

@Component({
  selector: 'proxy-test',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.css'],
  providers:[BaseService]
})


export class ProxyComponent implements OnInit {
    constructor(private ds:BaseService){

    }

  ngOnInit(){
      this.getData();
  }


getData(){
    let url = EXPORT_URL;
    this.ds.getData(url,"POST").then(res=>{
        console.log(res);
    })
    
}





}








