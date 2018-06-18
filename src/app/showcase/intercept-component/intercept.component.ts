import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { HttpClientService } from '../util/httpclientservice';
import { HttpInterceptorService } from '../util/interceptservice';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {  AuthService } from '../util/abandon/authservice';

const EXPORT_URL = "examinationEvaluation-web/papersManager/findExamPaperById/4mt5Tz7j7MyZnuTZnjERpM"

@Component({
  selector: 'intercept-test',
  templateUrl: './intercept.component.html',
  styleUrls: ['./intercept.css'],
  providers:[AuthService]
})


export class InterceptComponent implements OnInit {
  constructor(private auth:AuthService, private ds: HttpClientService,private interService:HttpInterceptorService) {

  }


  ngOnInit() {
    //   this.getData();
  }

  /************************HttpClient方式实现拦截器****************** */
  getData() {
    // let url = EXPORT_URL;
    let url = "bookType/getAllType/1/1";

    this.ds.get(url).then(res => {
      console.log(res);
    })

  }

  postData() {
    let url = "papersManager/addExamPaper";
    let body = {};
    this.ds.post(url, body).then(
      res => {
        console.log(res);
      })
  }
/******************************************************** */


/****************自定义拦截器********************** */
getData2(){
    let url = "bookType/getAllType/1/1";
   this.interService
      .get(url)
      .toPromise()
      .then(response =>{ console.log( response.json())})
}

  postData2() {
    let url = "papersManager/addExamPaper";
    let body = {};
  this.interService
      .post(url,null)
      .toPromise()
      .then(response =>{ console.log( response.json())})
  }

  /************************************************************* */

  /***************************大神级拦截器********************************* */
  getData3(){

    let url = "bookType/getAllType/1/1";
   this.auth.get(url).then(response =>{ console.log( response.json())})

  }



  /************************************************************************ */
}

export class Paper{
  id:string;
  name:string;
}
