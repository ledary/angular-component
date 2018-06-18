import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';




@Component({
  selector: 'login-test',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.css']
})


export class LoginTest implements OnInit {
  @ViewChild('table')
  tplRef: ElementRef;
  

  exportExcel() {
    //tab是对应界面的表格。
    let tab = this.tplRef.nativeElement;
    // let tab:any= document.getElementById("tableExcel");
    var csvString = '';
    for (var i = 0; i < tab.rows.length; i++) {
      var rowData = tab.rows[i].cells;
      for (var j = 0; j < rowData.length; j++) {
        // ,可以分割为不同的单元格
        csvString = csvString + rowData[j].innerHTML + ",";
      }
      csvString = csvString.substring(0, csvString.length - 1);
      //   \n  在Excel里起到换行的作用
      csvString = csvString + "\n";
    }
    csvString = csvString.substring(0, csvString.length - 1);

    var _utf = '\uFEFF';
    var a = $('<a/>', {
      style: 'display:none',
      href: 'data:application/vnd.ms-excel;charset=utf-8,' + _utf + encodeURIComponent(csvString),
      download: 'emailStatistics.xls'
    }).appendTo('body');
    a[0].click();
    a.remove();

  }










  /************************下拉框代码****************************** */
  selectValues:SelectData[] = new Array();

  id="courseId"
  value="courseName"
  data=[
    {"courseId":"123456","courseName":"默认值"},    
    {"courseId":"1","courseName":"物理学"},
    {"courseId":"2","courseName":"生物科技"},
    {"courseId":"3","courseName":"化学"},
    {"courseId":"4","courseName":"电子信息"},
    {"courseId":"5","courseName":"科学技术"}
  ];

  ngOnInit(){
    let obj = this;

    setTimeout(function(){
          obj.selectValues[0] = new SelectData();
          obj.selectValues[0].id="12345";
          obj.selectValues[0].value="默认值";
    },3000);

  }

}

export class User {
  userCode: string;
  password: string;
}

export class SelectData {
  id: string;
  value: string;

}



