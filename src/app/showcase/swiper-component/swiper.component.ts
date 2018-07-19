import { Component, OnInit, ViewChild, ElementRef,ViewChildren,QueryList,AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Component({
    selector: 'swiper-component',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.css']
})


export class SwiperComponent implements OnInit,AfterViewInit {
    @ViewChild("scorewrapper") scoreWrapper: ElementRef;
    @ViewChild("nomalwrapper") nomalWrapper: ElementRef;
    @ViewChild("linewrapper") lineWrapper: ElementRef;
    @ViewChild("otherswiper") otherWrapper: ElementRef;

@ViewChildren("linewrapper") lineWrapperList:QueryList<ElementRef>;
@ViewChildren("nomalwrapper") nomalWrapperList:QueryList<ElementRef>;
@ViewChildren("scorewrapper") scoreWrapperList:QueryList<ElementRef>;
// @ViewChildren("otherswiper") wrapper:QueryList<ElementRef>;


    lastX: any;
    lastXForMobile: any;

    // 当前左滑的对象
    currentLeftObj: HTMLDivElement;

    // 上一个左滑的对象
    previousLeftObj: HTMLDivElement;
    //用于记录触摸时点击的点
    start: any;

    delta: any;


    datas = new Array();

    ngOnInit() {
       this.datas=[
    {name:"数据1",anthor:"ledary",times:"1分钟前"},
    {name:"数据2",anthor:"ledary",times:"1分钟前"},
    {name:"数据3",anthor:"ledary",times:"1分钟前"},
    {name:"数据4",anthor:"ledary",times:"1分钟前"},
    {name:"数据5",anthor:"ledary",times:"1分钟前"},
    {name:"数据6",anthor:"ledary",times:"1分钟前"}

    ]
        // this.swiperInit();
        // this.swiperMove();
        // this.swiperEnd();
        // this.dymdicBind();

    }
ngAfterViewInit(){
    this.divInitWidth();
        this.dymdicBind();
    
}


    /************************滑动删除有关********************************** */
    /**
     * 初始化每行的宽度
     */
    divInitWidth() {
          let obj = this;
        for(let i=0;i<this.lineWrapperList.toArray().length;i++){
           
        let line: HTMLDivElement = this.lineWrapperList.toArray()[i].nativeElement;
        let scorell: HTMLDivElement =this.scoreWrapperList.toArray()[i].nativeElement;
        let nomal: HTMLDivElement = this.nomalWrapperList.toArray()[i].nativeElement;
        scorell.style.width = line.clientWidth + 133 + "px";
        nomal.style.width = line.clientWidth + "px";
        }
    }

    // 网页在PC浏览器中运行时的监听
    dymdicBind() {
        let obj = this;
    
        for(let i=0;i<this.nomalWrapperList.toArray().length;i++){
        
          this.nomalWrapperList.toArray()[i].nativeElement.addEventListener("mousedown", function (e) {
            obj.lastX = e.clientX;
            // 记录被按下的对象  注意此this并非指代组件
            obj.currentLeftObj = this; 
        })
        this.nomalWrapperList.toArray()[i].nativeElement.addEventListener("mouseup", function (e) {
            if (obj.previousLeftObj && obj.currentLeftObj != obj.previousLeftObj) {
                $(obj.previousLeftObj).animate({ marginLeft: "0" }, 500);
                obj.previousLeftObj = null;
            }
            let diffx = e.clientX - obj.lastX;
            if (diffx < -150) {
                // 左滑
                $(obj.currentLeftObj).animate({ marginLeft: "-132px" }, 500); 
                // 已经左滑状态的按钮右滑
                if(!obj.previousLeftObj && obj.previousLeftObj != obj.currentLeftObj){
                    $(obj.previousLeftObj).animate({ marginLeft: "0" }, 500); 
                }   
                obj.previousLeftObj = obj.currentLeftObj; // 记录上一个左滑的对象
            } else if (diffx > 150) {
                if (obj.currentLeftObj == obj.previousLeftObj) {
                    $(obj.currentLeftObj).animate({ marginLeft: "0" }, 500); // 右滑
                    obj.previousLeftObj = null; // 清空上一个左滑的对象
                }
            }
        })
        }
    }

    del(index){
        console.log(this.datas);
   this.datas.splice(index,1);
        console.log(this.datas);

    }
    /************************滑动删除有关********************************** */
}


/*     废弃方法********************************************************************************
    // 滑动开始
    touchStart() {
        let obj = this;
        for(let i=0;i<this.nomalWrapperList.toArray().length;i++){
            this.nomalWrapperList.toArray()[i].nativeElement.addEventListener('touchstart', function (e) {
                alert(1)
            obj.lastXForMobile = e.changedTouches[0].pageX;
             // 记录被按下的对象  注意此this并非指代组件 
            obj.currentLeftObj = this;

            // 记录开始按下时的点
            let touches = e.touches[0];
            obj.start = {
                x: touches.pageX,
                y: touches.pageY
            };

            console.log(obj.start);

        });
        }
       
    }

    /**
     * 滑动过程中
     */
    // touchMove() {
    //     for(let i=0;i<this.nomalWrapperList.toArray().length;i++){
        
    //     let obj = this;
    //       this.nomalWrapperList.toArray()[i].nativeElement.addEventListener('touchmove', function (e) {
    //         var touches = e.touches[0];
    //         console.log(obj.start);

    //         //记录下横纵的移动距离
    //         obj.delta = {
    //             x: touches.pageX - obj.start.x,
    //             y: touches.pageY - obj.start.y
    //         };
    //         // 横向位移大于纵向位移，阻止纵向滚动
    //         if (Math.abs(obj.delta.x) < Math.abs(obj.delta.y)) {
    //             event.preventDefault();
    //         }
    //         console.log(obj.delta)
    //     });
    //     }
    // }

    // /**
    //  * 滑动结束
    //  */
    // touchEnd() {
    //     let obj = this;
    //     for(let i=0;i<this.nomalWrapperList.toArray().length;i++){
        
    //       this.nomalWrapperList.toArray()[i].nativeElement.addEventListener('touchend', function (e) {
    //         console.log(obj.start);
            
    //         if (obj.previousLeftObj && obj.currentLeftObj != obj.previousLeftObj) { // 点击除当前左滑对象之外的任意其他位置
    //             // 右滑
    //             $(obj.previousLeftObj).animate({ marginLeft: "0" }, 500);
    //             obj.previousLeftObj = null;
    //         }
    //         var diffX = e.changedTouches[0].pageX - obj.lastXForMobile;
    //         if (diffX < -150) {
    //             alert(1)
    //             $(obj.currentLeftObj).animate({ marginLeft: "-132px" }, 500); // 左滑
    //             obj.previousLeftObj && obj.previousLeftObj != obj.currentLeftObj &&
    //                 $(obj.previousLeftObj).animate({ marginLeft: "0" }, 500); // 已经左滑状态的按钮右滑
    //             obj.previousLeftObj = obj.currentLeftObj; // 记录上一个左滑的对象
    //         } else if (diffX > 150) {
    //             alert(1)

    //             if (obj.currentLeftObj == obj.previousLeftObj) {
    //                 console.log($(obj.currentLeftObj));
    //                 // 右滑
    //                 $(obj.currentLeftObj).animate({ marginLeft: "0" }, 500);
    //                 // 清空上一个左滑的对象
    //                 obj.previousLeftObj = null;
    //             }
    //         }
    //     });
    //     }
    // }




