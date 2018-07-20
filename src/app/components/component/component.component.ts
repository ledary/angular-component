import { Component, OnInit, ViewChild,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'itoo-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']

})
export class ComponentComponent implements OnInit {
  //是否有input框   
  @Input() sonButton={
    btnName:"封装的按钮"
  } 

  count=0;

  //点击链接是发送信息
  @Output() clickEmit = new EventEmitter();
  constructor(   ) { }

  ngOnInit() {}

  click(){
    let flag = this.getBackData();
    this.clickEmit.emit(flag);
  }

  // 模拟后台判断该用户是否有权限
  getBackData(){
    var arr;
    let reg=new RegExp("(^| )"+"user"+"=([^;]*)(;|$)");
    arr=document.cookie.match(reg)
    if(arr != null && decodeURI(arr[0])!=null){
      return 1;
    }
    else{
      return 0;
    }

  }



}
export class User{
  userCode:string;
  password:string;
}
