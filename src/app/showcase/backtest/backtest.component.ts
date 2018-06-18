import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../util/baseservice';


@Component({
  selector: 'app-backtest',
  templateUrl: './backtest.component.html',

  styleUrls: ['./backtest.component.css']

})

export class BackTestComponent implements OnInit {

  constructor(private ds: BaseService,private router:Router
  ) { }
  ngOnInit() {

  }

  jump(){
    this.router.navigateByUrl("showcase");
  }

  /*********联调测试后台服务******** */

  // backurl = "http://192.168.21.115:8887/class/";
  backurl = "http://192.168.21.99:8099/class/";
  // backurl = "http://localhost:8099/class/";


  getToken() {
    let url = this.backurl + "/getToken/054448bed82e8c3f69032d";
    this.ds.getToken(url).then(res => {
      alert(res.code + "\n" + res.message + "\n" + res.data);

      console.log(res);
    })
  }
  //添加
  create() {
    let back = new Entity();
    back.classCode = "9999";
    back.className = "武刚鹏测试班级";
    back.grade = "9999";
    back.professionId = "9999";
    back.schoolBranchId = "9999";
    // let url = this.backurl +"insert/"+back;
    let url = this.backurl + "insert";

    alert(url);
    this.ds.create(url, back).then(
      res => {
        console.log("creaate" + res)
        let endData: BackData = res;
        console.log(endData);
        alert(endData.code + "\n" + endData.message + "\n" + endData.data);
      }
    )
  }
  //更新
  update() {
    let id = "100635";
    let back = new Entity();
    back.classCode = "9999";
    back.className = "武刚鹏测试班级";
    back.grade = "9999";
    back.professionId = "9999";
    back.schoolBranchId = "9999";
    // let url = this.backurl +"updateByExample/classCode/"+id;
    let url = this.backurl + "updateByExample/classCode";
    let str = "100635";

    alert(url);
    this.ds.update(url, str).then(
      res => {
        console.log("delete" + res)
        let endData: BackData = res;
        console.log(endData);
        alert(endData.code + "\n" + endData.message + "\n" + endData.data);
      }
    )
  }
  //删除
  del() {
    let delstr = "0044fbbe28c254673bc37a";
    // let url = this.backurl +"deleteById/id/"+delstr;
    let url = this.backurl + "deleteById/id";
    let back = new Entity();
    back.id = delstr;
    back.classCode = ""
    alert(url);
    this.ds.delete(url, back).then(
      res => {
        console.log("delete" + res)
        let endData: BackData = res;
        console.log(endData);
        alert(endData.code + "\n" + endData.message + "\n" + endData.data);
      }
    )

  }
  select() {
    let id = "054448bed82e8c3f69032d";
let url= "http://192.168.22.153:8081/authorityManagement-web/roleManagement/queryApplication";
    // let url = this.backurl +"findById/id/"+id;
    // let url = this.backurl + "findById/id/" + id;
    alert(url);
    this.ds.getData(url,"POST").then(
      res => {
        console.log(res);
        let endData: BackData = res;
        console.log(endData);
        alert(endData.code + "\n" + endData.message + "\n" + endData.data);
      }
    )

  }

}

class Entity {
  id: string;
  classCode: String;

  className: String;

  grade: String;

  professionId: String;

  schoolBranchId: String;
}
class BackData {
  code: any;
  message: string;
  data: any;
}





