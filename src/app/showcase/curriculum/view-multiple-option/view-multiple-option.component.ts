import { Component, OnInit } from '@angular/core';
import {  Http } from '@angular/http';


@Component({
  selector: 'view-multiple-option',
  templateUrl: './view-multiple-option.component.html',
  styleUrls: ['../curriculum-view.css']
})
export class ViewMultipleOptionComponent implements OnInit {

  // 模糊查询接口
private readonly CONDITION_URL = "";
// 问卷分析的接口
private readonly QUESTION_URL = "";
//学年学期接口
private readonly SEMESTER_URL = "";
//课程接口
private readonly COURSE_URL = "";
//专业接口
private readonly MAJOR_URL = "";
  constructor(private http:Http) { }

  ngOnInit() {
    this.data = [
      {
        questionContent: "题干：本学期所采用的参与式教学感觉效果怎么样呢？", suboptions: [
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项B：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项C：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项C：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" }
        ]
      },
      {
        questionContent: "题干：本学期所采用的参与式教学感觉效果怎么样呢？", suboptions: [
          { optionContent: "选项C：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项C：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项C：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项C：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" }
        ]
      },
      {
        questionContent: "题干：本学期所采用的参与式教学感觉效果怎么样呢？", suboptions: [
          { optionContent: "选项C：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" }
        ]
      },
      {
        questionContent: "题干：本学期所采用的参与式教学感觉效果怎么样呢？", suboptions: [
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" },
          { optionContent: "选项A：教学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关学内容精确与现实相关", count: 1, ratio: "49%" }
        ]
      }



    ]
  }


condition="";
  //后台传回来的数据
  data = new Array();

// 转换百分比
  convert(ratio: String) {
    let data = {
      "width": ratio
    }
    return data;
  }

query(){
  let url = ""
  if(this.condition == "" || this.condition == null){
   url = this.CONDITION_URL + "/" + this.page + "/" + this.pageSize 
  }else{
   url =this.CONDITION_URL + "/" + this.page + "/" + this.pageSize + "?" + this.condition;
  }
  this.http.get(url).toPromise().then(res=>{
    if(this.isResNull(res)){
        this.data = res.json().data.list;
        this.total = res.json().data.total;
    }
  })
}

isResNull(res:any):boolean{
  if(res != null && res.json() != null && res.json().data != null ){
    return true;
  }else{
    return false;
  }
}



  //----------------------------------分页-------------------------------------------------
  total: number;
  pageSize: number = 5;
  totalPages: number = this.total / this.pageSize;
  sizeList: Array<number> = [5, 10, 15, 20];
  page: number = 1;



  //改变页号，更新表格数据
  changePage(url: string, page: number, name): void {
    if (page > 0 && page < this.totalPages) {
      this.page = page;
      this.totalPages = Math.ceil(this.total / this.pageSize);
      // this.getData(url);
    } else {
      this.page = 1;
      // this.showData();
    }
  }

  //改变页大小，更新表格显示
  changePageSize(): void {
    this.page = 1;
    this.totalPages = Math.ceil(this.total / this.pageSize);
    console.log("改变页号之后");
    console.log(this.totalPages);
    // this.showData();
  }
  //上一页
  previousPage() {
    this.page--;
  }
  //下一页
  nextPage() {
    this.page++;
  }
  //首页
  topPage() {
    this.page = 1;
  }
  //尾页
  endPage() {
    this.page = this.totalPages
  }

}
