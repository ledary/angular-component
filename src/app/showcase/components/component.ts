import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';



@Component({
    selector: 'component-test',
    templateUrl: './component.html'
})


export class ComponentComponent {

    parentButton = {
        btnName: "判断权限"
    }

    getAuth(result) {

        if (result.code) {
            alert("有权限")
        } else {
            alert("没有权限")
        }
    }

    //设置cookie
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    //清除权限
    delAuth() {
        this.setCookie("user", "武刚鹏", -1)
    }
    //设置权限
    setAuth() {
        this.setCookie("user", "武刚鹏", 1)
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



