/**
 * Created by WGP on 2017/4/24.
 * datatable:1.1.0
 */
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, DoCheck, OnChanges } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'question-table',
  templateUrl: 'questiontable.component.html',
  styleUrls: ['./questiontable.component.css']
})


export class QuestionTableComponent implements OnInit {


//模糊条件
condition:string="";



  //用来保存全部的数据
  data = new Array();
  //页大小的选择
  @Input() sizeList = [10, 20, 30];
  //数据标题
  private title = ["章节", "题干", "分数"];
  pageSize: number = 10;
  //页号，初始为1 
  page: number = 1;
  //总记录数      
  total: number=10;
  //保存json数据串中的字段名（不包括GUID字段）
  arr: string[] = new Array();
  //总页数           
  totalPages: number = Math.ceil(this.total / this.pageSize);

  //依赖注入，提供http服务
  constructor(private rote:ActivatedRoute,private router:Router
  ) { 
    console.log(rote);
    console.log(router);

  }

  ngOnInit() {
    this.data = [
      { chapter: "第一章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" },
      { chapter: "第二章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" },
      { chapter: "第三章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" },
      { chapter: "第四章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" },
      { chapter: "第五章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" },
      { chapter: "第六章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" },
      { chapter: "第七章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" },
      { chapter: "第八章", diffcult: "Web Service是自描述、 自包含的可用网络模块， 可以执行具体的业务功能。Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如XML和HTTP。Web Service减少了应用接口的花费。Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制。", score: "" }
    ]

    this.arr = ["chapter", "diffcult", "score"]
  }







  /*****************改变页大小或者改变页号********** */
  //改变页大小时，返回数据

  showData(): void {
    // TODO 写自己查询后台获取数据的代码
    if(this.condition != null && this.condition.trim()==""){
        //模糊查询
    }else{
      //查询全部
    }
  }





  // //改变页大小，更新表格显示
  changePageSize(): void {
    this.page = 1;
    this.totalPages = Math.ceil(this.total / this.pageSize);

    this.showData();
  }
  // //上一页
  previousPage() {
    this.page--;
    this.showData();
  }
  // //下一页
  nextPage() {
    this.page++;
    this.showData();
  }
  // //首页
  topPage() {
    this.page = 1;
    this.showData();
  }
  // //尾页
  endPage() {
    this.page = this.totalPages
    this.showData();

  }











}








