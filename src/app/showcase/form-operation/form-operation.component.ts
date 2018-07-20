import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';



@Component({
    selector: 'from-operation',
    templateUrl: './form-operation.component.html',
    styleUrls: ["./form-operation.component.css"],
})


export class FormOperationComponent implements OnInit, AfterViewInit {

    @ViewChild("checkDiv")
    checkDiv: ElementRef
    result: any;
    user: UserModel = new UserModel();
    likes = ["篮球", "排球", "足球", "气球", "棒球"]
    constructor() { }
    ngOnInit() {
        this.getBackendData();
    }
    //界面初始化之后
    ngAfterViewInit() {
       this.viewInit();
    }
    //模拟从后台获取数据
    getBackendData(){
        this.user.userName = "武刚鹏";
        this.user.email = "163.com";
        this.user.job = "jiaoshi";
        this.user.jobName = "教师";
        this.user.like = "篮球,排球";
        this.user.password = "1";
        this.user.phone = "157326";
        this.user.sexName = "男";
        this.user.sexCode = "1"
    }
    //复选框渲染界面
    viewInit(){
        let htmlDom = this.checkDiv.nativeElement;
        let inputs = $(htmlDom).find('input');
        let strs = this.user.like.split(',');
        for (let i = 0; i < inputs.length; i++) {
            if (strs != null && strs.includes(this.likes[i])) {
                inputs[i].checked = true;
            }
        }
    }

    //提交表单
    saveForm() {
        this.result = this.userToString();
    }
    //提交单选框
    saveRadio(str: string) {
        this.result = "sexCode:" + this.user.sexCode + "\n" + "sexName:" + this.user.sexName
    }
    //提交下拉框
    saveSelect(selectHtml: HTMLSelectElement) {
        let option: any = selectHtml.options[selectHtml.selectedIndex]
        this.user.jobName = option.innerText;
        this.result = option.value + ":" + option.innerText;
    }
    //提交复选框
    saveCheckbox() {
        this.result = this.user.like;
    }

    //选中复选框事件
    selectLike(html) {
        let inputs = $(html).find('input');
        let strs = [];
        for (let i = 0; i < inputs.length; i++) {
            //判断是否为元素节点，以及checked是否唯true
            if (inputs[i].nodeType == 1 && inputs[i].checked == true) {
                strs.push(inputs[i].parentElement.innerText.trim());
            }
        }
        this.user.like = this.join(strs);
    }
    //选择单选框
    selectRadio() {
        console.log(event.srcElement)
        this.user.sexName = event.srcElement.parentElement.innerText
    }
    //选择下拉框
    chageOption(selectHtml: HTMLSelectElement) {
        let option: any = selectHtml.options[selectHtml.selectedIndex]
        this.user.jobName = option.innerText;
        this.result = option.value + ":" + option.innerText;
    }

    //对象转字符串
    userToString() {
        let str = null;
        for (let field in this.user) {
            str = str + field + "=" + this.user[field] + ";"
        }
        return str;
    }

    private join(strs:string[]):string{
        if(strs != null && strs instanceof Array){
            let str="";
           for(let i=0;i<strs.length;i++){
                str = str + strs[i];
                if(i != strs.length-1){
                    str = str + ","
                }
           }
           return str;
        }
        return null;
    }

}


export class UserModel {
    userName: string
    password: string
    email: string
    phone: string
    sexCode: string
    sexName: string
    like: string
    job: string
    jobName: string

}



