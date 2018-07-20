import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'from-operation',
    templateUrl: './form-operation.component.html',
    styleUrls: ["./form-operation.component.css"],
})


export class FormOperationComponent implements OnInit {


    result: any;
    user: UserModel = new UserModel();
    likes=["篮球","排球","足球","气球","棒球"]
    constructor() { }
    ngOnInit() {
        this.user.userName = "武刚鹏";
        this.user.email = "163.com";
        this.user.job = "jiaoshi";
        this.user.jobName = "教师";
        this.user.like =["篮球"];
        this.user.password = "1";
        this.user.phone = "157326";
        this.user.sexName = "男";
        this.user.sexCode="0"
    }

    saveForm() {
        this.result =this.userToString();
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

    saveSelect(selectHtml:HTMLSelectElement){
        let option: any = selectHtml.options[selectHtml.selectedIndex]
        this.user.jobName = option.innerText;
        this.result = option.value + ":" + option.innerText;
    }
    saveCheckbox(checkDiv){
        console.log($(checkDiv).find('input'))
        // $(checkDiv).find('input').forEach(el => {
        //     this.result = this.result + el.value
        // });
        this.result = this.user.like.join(",")
    }

    selectLike(i){
        this.user.like[i] = this.likes[i]
       let str = new Array();
      for(let i = 0;i<this.user.like.length;i++){
        str[i] = this.user.like[i];
      }
        this.user.like=str;
    }
    userToString() {
        let str = null;
        for (let field in this.user) {
            str = str  + field + "=" + this.user[field]+";"
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
    like: string[]
    job: string
    jobName: string

}



