import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,NavigationStart,NavigationEnd,NavigationCancel,NavigationError,RoutesRecognized } from '@angular/router';
import { BaseService } from '../util/baseservice';



const EXPORT_URL = "http://192.168.22.201:8080/achievement-web/scoreManage/exportSingleStudentScore/1/2016级/1/1"
const  QUERY_URL = "http://192.168.22.202:8080/basicInfo-web/student/queryStudentPage";
// const  url = "src/data/datatable/data-table.json";
@Component({
  selector: 'table-test',
  templateUrl: './datatabledemo.component.html',
  styleUrls: ['./datatabledemo.css']
})


export class DataTableDemo implements OnInit {

  constructor(private ds: BaseService,private acrout:ActivatedRoute,private router:Router
  ) {
 router.events.subscribe(e => {
    if(e instanceof NavigationStart) {
     
      
    } else if(e instanceof NavigationEnd) {
      // alert(12)
        let id = this.acrout.snapshot.paramMap.get("id");
    this.getData();
      
    } else if(e instanceof NavigationCancel) {
      // alert(13)
      
    } else if(e instanceof NavigationError) {
      // alert(14)
      
    } else if(e instanceof RoutesRecognized) {
      // alert(15)
      
    }
  });

   }
  //初始化查询数据。把data赋给表格
  ngOnInit() {
    let id = this.acrout.snapshot.paramMap.get("id");
    this.getData();
  }

  /*************表格所需要初始化的变量******************************** */
  btnAdd:boolean  = true;
  btnDelete:boolean  = true;
  btnImport:boolean  = true;
  btnExport:boolean = true;
  btnList: string[] = ["启用"];
  title = ['班号', '年级', '地址', '标记', 'mark'];
  arrbutes = ["classCode", "gradeId", "className", "remark", "address"];
  isLink = [true, true, false, false, false];
  paging:boolean = false;
  pagination =false;
  data = new Array();
  total: number;
  pageSize = 10;
  page = 1;
  sizeList = [5, 10, 20, 50];
  isCheck = true;
  btnstyle = [
    { "color": "green" },
    { "color": "red" },
    { "color": "" }]

    buttonHeaders=[{
      value:'一键计算',
      style:{background: "red"}
    }]
    /****************************************************************** */





  /**
   * 查询后台的数据，赋给data，改变data的值，后台的值也就改变了。
   */
  getData() {
    // let url = URL +'/' +　this.page +'/'+ this.pageSize +'/%20'
    let url = "src/data/datagrid/data-grid.json"
    this.ds.getData(url,"GET").then(
      res => {
        // console.log(res.data);
        // this.data = res.data;
        // this.total = res.total;
        this.data= res.data;
        this.total = res.total;
      }
    )
  }

  /**
   * 
   * @param data 真分页情况下，页号，页大小改变就会查询后台的数据。
   */
  changepage(data: any) {

    // let url = "src/data/datatable/data-table.json" + "\n页号page: " + data.page + "\n页大小pageSize:" + data.pageSize + "\n总页数totalPages:" + data.totalPages;

      let  url = "src/data/datatable/data-table.json" + "\n页号page: " + data.page + "\n页大小pageSize:" + data.pageSize + "\n总页数totalPages:" + data.totalPages;
    // alert(url);

    let dataurl = URL +'/' +　data.page +'/'+ data.pageSize +'/%20'
  
    this.ds.getData(dataurl,"GET").then(
      res => {
        this.data = res.data.list;
        this.total = res.data.total;
      }
    )

  }


  /**
   * 批量删除数据
   * @param el 
   */
  deleteDatas(el:any) {
    alert(el);
    alert(this.data.length);
    for(let i =0; i<el.length;i++){
         this.data.splice(el[i]-i,1);  
         this.total--;
    }
  }

/**
 * 
 * @param el 删除单个数据
 */
  deleteData(el:number) {
    alert("要删除的索引:"+el);
    this.data.splice(el,1);


  }

  edit(data:any){
    alert(data);
  }

  coustom(data:any){
      console.log(data);
  }


  /**
   * 
   * @param obj 自定义操作列方法
   */
  operatData(obj: any) {

   

    switch (obj.element.innerText) {
      case "启用":
      //业务代码块
        alert("启用");
         alert(obj.data);
        break;
      case "编辑":
       //业务代码块
        alert("编辑");
         obj.element.innerText = "我成功了";
        break;
      default:
       //业务代码块
        alert("删除")
        this.deleteData(obj.data);
         obj.element.innerText = "我成功了";
        break;
    }
  }

/**
 * 
 * @param data 点击td的链接触发的事件
 */
  linkClick(data: any) {
    alert(data);
  }


/**直接打开路径下载文件
 * 导出文件 ，表格组件返回数据为  null
 * @param data 
 */
  export2(data:any){

console.log(data)
let url ="http://192.168.22.201:8080/achievement-web/scoreManage/exportSingleStudentScore/1/2016级/1/1";
  //  var objectUrl = URL.createObjectURL(url);
      window.open(url);
    URL.revokeObjectURL(url);

  }


/**
 * 
 * @param data 前端内置url地址下载文件
 */
  export(data:any){
    

    /**************************************** 注释部分为下载文件的一种方案，但是文件名会乱码**********************/
let url ="http://192.168.22.201:8080/achievement-web/scoreManage/exportSingleStudentScore/1/2016级/1/1";
    this.ds.getFile(url).then(res=>{

      var timestamp = Date.parse(new Date().toDateString());
timestamp = timestamp / 1000
      alert(  timestamp);
      let file = new File([res],timestamp.toString() + ".xls",{type: "application/vnd.ms-excel"})

      var objectUrl = URL.createObjectURL(file);
      window.open(objectUrl);
    URL.revokeObjectURL(objectUrl);
    })
    /**************************************** 注释部分为下载文件的一种方案，但是文件名会乱码**********************/

  }


  import(data:any){
      console.log(data);
  }

  selectbox(box:any){
      alert(box);
  }

// ***********************测试博客好友组件**************************************

 config={
   title:"测试页面",
   list:[1,2,3,4,5,6]
 }


}








