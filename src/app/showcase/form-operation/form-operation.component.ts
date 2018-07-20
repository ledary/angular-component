import { Component,ViewChild,ElementRef, OnInit,AfterViewInit } from '@angular/core';



@Component({
    selector: 'from-operation',
    templateUrl: './form-operation.component.html',
    styleUrls: ["./form-operation.component.css"],
})


export class FormOperationComponent implements OnInit,AfterViewInit {

    @ViewChild("checkDiv")
    checkDiv:ElementRef


    result: any;
    user: UserModel = new UserModel();
    likes = ["篮球", "排球", "足球", "气球", "棒球"]
    constructor() { }
    ngOnInit() {
        this.user.userName = "武刚鹏";
        this.user.email = "163.com";
        this.user.job = "jiaoshi";
        this.user.jobName = "教师";
        this.user.like = "篮球,排球";
        this.user.password = "1";
        this.user.phone = "157326";
        this.user.sexName = "男";
        this.user.sexCode = "0"
    }
    ngAfterViewInit(){
       let htmlDom =  this.checkDiv.nativeElement;
       let inputs = $(htmlDom).find('input');
       let strs = this.user.like.split(',');
        for (let i = 0; i < inputs.length; i++) {
            if(strs != null && strs.includes(this.likes[i]) ){
                inputs[i].checked = true;
            }
        }
    }

    saveForm() {
        this.result = this.userToString();
    }

    chageOption(selectHtml: HTMLSelectElement) {
        let option: any = selectHtml.options[selectHtml.selectedIndex]
        this.user.jobName = option.innerText;
        this.result = option.value + ":" + option.innerText;
    }

    saveRadio(str: string) {
        this.result = "sexCode:" + this.user.sexCode + "\n" + "sexName:" + this.user.sexName
    }
    selectRadio() {
        console.log(event.srcElement)
        this.user.sexName = event.srcElement.parentElement.innerText
    }

    saveSelect(selectHtml: HTMLSelectElement) {
        let option: any = selectHtml.options[selectHtml.selectedIndex]
        this.user.jobName = option.innerText;
        this.result = option.value + ":" + option.innerText;
    }
    saveCheckbox() {
        this.result = this.user.like;
    }

    selectLike(html) {
        let inputs = $(html).find('input');
        let strs = [];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].nodeType == 1 && inputs[i].checked == true) {
                strs[i] = inputs[i].parentElement.innerText.trim();
            }
        }
        this.user.like = strs.join();
    }
    userToString() {
        let str = null;
        for (let field in this.user) {
            str = str + field + "=" + this.user[field] + ";"
        }
        return str;
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



