/**
 * Created by WGP on 2017/4/24.
 */
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, DoCheck, OnChanges } from '@angular/core';
import { DataService } from "./share/dataservice";
import { FALSE, TRUE } from './share/const-data';
import { ModalService } from './modal.service';
import { FileUploader } from 'ng2-file-upload';







const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'data-grid',
  // templateUrl: 'test.html',
   templateUrl:'datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
  // styleUrls:['./test.css']
})



export class DataGridComponent implements OnInit, DoCheck, OnChanges {



  data: string[][] = new Array();  //假分页查询是用来保存全部的数据
  // viewData:string[][]= new Array();    //界面显示的数据
  @Input() private sizeList: Array<number>; //页大小的选择
  @Input() private title: Array<string>;    //数据标题
  @Input() url: string;            //远程查询数据服务地址
  @Input() deleteUrl ;
  cloneUrl: string;
  @Input() pageSize: number = 10;     //页大小，初始为10
  @Input() page: number = 1;     //页号，初始为1
  @Input() paging: boolean = false;          //判断是否为真分页
  @Input() editButton: boolean = true;
  @Input() addButton: boolean = true;
  @Input() deleteButton: boolean = true;
  @Input() importButton: boolean = false;
  @Input() exportButton: boolean = false;
  @Input() isDetail: boolean = false;
  @Input() buttonList: string[] = new Array<string>();
  @Input() buttonstyle = new Array<string>();
  @Input() isLink = new Array<Boolean>();
  @Input() isCheckBox = true;

  @Output() linkClickEmitData = new EventEmitter();
  @Output() editData = new EventEmitter<any>();
  @Output() addOpen = new EventEmitter<any>(); //添加
  @Output() operat = new EventEmitter<any>();


  IsUploadFile: boolean = false;


  arr: string[] = new Array();                   //保存json数据串中的字段名（不包括GUID字段）
  total: number;                                 //总记录数
  type: string[][] = new Array();               //控制数据的隐藏,TRUE表示不可编辑，FALSE表示可编辑
  totalPages: number = this.total / this.pageSize * 10;     //总页数

  //依赖注入，提供http服务
  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {

  }

  ngOnInit() {
    let url = this.url;
    this.cloneUrl = this.url;
    this.getData(url);
  }
  //改变url，即可刷新页面数据
  ngOnChanges() {
    if (this.cloneUrl != this.url) {
      this.cloneUrl = this.url;
      this.getData(this.url);
    }
  }





  /*****h获取后台的数据块***** */
  //初始化数据 -- 武刚鹏-2017年4月26日
  //获取后台数据，保存json的字段，初始化input与span的隐藏与显示
  getData(url: string): void {
    if (this.paging) {
      url = url + "/" + this.page + "/" + this.pageSize;
    }
    this.dataService
      .getData(url).then(
      res => {
        console.log(res);
          console.log(res.data.length);
        //获取总条数，真分页和假分页
        this.total = res.total ? res.total : res.data.length;
        this.totalPages = Math.ceil(this.total / this.pageSize);
console.log(res);
        //初始化数据前把所有的数组全部清空
        this.destoryData();
        //获取后台数据
        this.data = res.data;

        //获取数据里的字段名
        for (var item in res.data[0]) {
          if (item != "id" && item != 'ID' && item != 'GUID' && item != 'guid') {
            this.arr.push(item);
          }
        }
        //分配type值，来判断是否可以编辑，true不可编辑
        for (var i in this.data) {
          let array: string[] = new Array();
          for (var j in this.data[i]) {
            array.push(TRUE);
          }
          this.type.push(array);
        }
      });
  }

  //假分页显示数据方法,直接跳转到某页
  showData(): void {
    if (typeof this.pageSize == "string") {  //这里不知道为什么，自动转为string类型了，必须强制转换为number
      this.pageSize = Number(this.pageSize);
    }
    //如果是真分页需要从后台查询数据。
    if (this.paging) {

      this.getData(this.url);
    }

  }


  //销毁表格的中的数据内容，
  destoryData() {
    this.data.length = 0;//数据置空
    this.arr.length = 0;//字段置空
    this.type.length = 0; //是否可编辑也置空
  }

  /********************** */










  //***文件的导入导出块**** */

  //上传文件对象的基本设置
  public uploader: FileUploader = new FileUploader({
    url: URL,
    method: "POST",
    itemAlias: "uploadedfile",

  });

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;

  }



  //模拟点击选择文件方法
  importFile(el: HTMLElement) {
    el.click();
  }

  //选择文件后上传
  fileChange() {
    let item = this.uploader.queue[0];
    if (item != null) {
      let content = document.getElementById("file");
      if (content != null) {
        content.style.display = "block";
        let options = {
          left: '',
          top: ''
        }
        options.left = (window.innerWidth - content.clientWidth) / 2 + 'px';
        options.top = (window.innerHeight - content.clientHeight) / 2 + 'px';
        let src = document.getElementById("screen");
        this.modalService.open(content, src, options);
      }

      item.upload();
    }
  }


  //动态监测是否上传成功
  ngDoCheck() {
    if (this.uploader.queue[0] != null) {
      if (this.uploader.queue[0].isError) {
        alert("失败");
        this.uploader.progress = 0;
        this.uploader.queue.length = 0;
        this.closeSrc();
        let content = document.getElementById("file").style.display = "none";
      }
      if (this.uploader.queue[0].isSuccess) {
        console.log(this.uploader.queue.length);
        alert("成功");
        this.uploader.progress = 0;
        this.uploader.queue.length = 0;
        this.closeSrc();
        let content = document.getElementById("file").style.display = "none";
      }
    }
  }

  //todo: 导出文件  
  exportFile() {
    this.dataService.downloadService("dfdf");
  }
  //********************** */



  /*****************改变页大小或者改变页号********** */

  //改变页号，更新表格的数据
  changePage(page: number): void {
    if (page > 0 && page < this.totalPages) {
      this.page = page;
      this.totalPages = Math.ceil(this.total / this.pageSize);
      this.showData();
    } else {
      this.page = 1;
      this.showData();
    }

  }

  //改变页大小，更新表格显示
  changePageSize(): void {
    this.page = 1;
    this.totalPages = Math.ceil(this.total / this.pageSize);
    this.showData();
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


  /*****************改变页大小或者改变页号********** */


  //全部改为不可编辑的 状态
  refreshType() {
    this.type.length = 0;
    for (var i in this.data) {
      let array: string[] = new Array();
      for (var j in this.data[i]) {
        array.push(TRUE);
      }
      this.type.push(array);
    }

  }
  // //显示模态窗体  ID为 ： ng-modal
  open(el: HTMLElement) {

    this.addOpen.emit(el);

  }
  closeSrc() {

    this.modalService.close();
  }


  //点击按钮，编辑
  btnEdit(table: HTMLElement, div: HTMLElement) {
    let isCheck = false;
    var inputCheck = table.getElementsByTagName('input');
    for (let i = 1; i < inputCheck.length && inputCheck[i].type == "checkbox"; i++) {
      if (inputCheck[i].checked) {
        let data = { 'data': null, 'el': null };
        data.data = this.data[i];
        data.el = div;
        isCheck = true;
        this.editData.emit(data);
        break;
      }
    }
    if (isCheck == false) {
      alert("请至少选中一条记录！");
    }
  }


  //删除选中的数据
  deleteDatas(tbody: HTMLElement) {
    let index = -1;
    let isDelete = false;
    let ids = new Array<string>();
    let dataCount = new Array<number>();
    var inputCheck = tbody.getElementsByTagName('input');
    for (let i = 0; i < inputCheck.length && inputCheck[i].type == "checkbox"; i++) {
      if (inputCheck[i].checked && i != 0) {
        ids.push(this.data[index]['id']);
        dataCount.push(index);
        isDelete = true;
      }
      index++;
    }
    if (!isDelete) {
      alert("请至少选中一条记录！");
      return;
    }
    if (confirm('确定要删除吗？')) {
      let url = this.deleteUrl + "/" + ids;
      // let url = "http://192.168.22.159:8080/singleTableMaintain/data/classes/delete?" + json;
      this.dataService.delete(this.deleteUrl).then(res => {
        if (res.ok || res.Status == 200) {
          alert("删除成功!");
          for (let i = 0; i < dataCount.length; i++) {
            this.data.splice((this.page - 1) * this.pageSize + dataCount[i] - i, 1);
          }
        }
      }).catch(this.handleError);
    }
  }

  //操作
  operatData(e: HTMLElement, i: number) {
    let index = (this.page - 1) * this.pageSize + i;
    let data = {
      "data": this.data[index],
      "element": e
    }

    this.operat.emit(data);
  }

  linkClick(i: number) {
    let index = (this.page - 1) * this.pageSize + i;
    this.linkClickEmitData.emit(this.data[index]);
  }



  selectedAll(e: HTMLInputElement) {
    var inputCheck = document.getElementsByTagName('input');
    for (let i = 0; i < inputCheck.length && inputCheck[i].type == "checkbox"; i++) {
      inputCheck[i].checked = e.checked;
    }
  }



  //弹出模态窗体
  getInner() {

    let body = document.getElementById('right');
    if (typeof window.innerWidth != 'undefined') {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    error.message = "没有找到地址，或者网络不通！";
    alert(error.message);
    return Promise.reject(error.message || error);
  }

}








