import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[itoo-drag]'
})
export class DragDirective {

    //拖拽的目标的class属性
    @Input() dragTarget = "modal-dialog";
    //拖拽的目标的元素标签
    @Input() domTarget = "div";
    //class/id 连接符
    @Input() separator = ".";
    // 在dragTarget里不需要拖拽的元素，并且具有unDragTarget的close属性
    @Input() unDragTarget = ["close"];
    dragModal = {
        mouseStartPoint: { "left": 0, "top": 0 },
        mouseEndPoint: { "left": 0, "top": 0 },
        mouseDragDown: false,
        basePoint: { "left": 0, "top": 0 },
        moveTarget: null,
        topLeng: 0
    }
    constructor(private el: ElementRef) {
        //this.el.nativeElement相当于 标题的这个div
        this.addStyle();
        this.documentMousemove();
    }

    //拖拽目标条件样式
    addStyle() {
        this.el.nativeElement.style.cursor = "move";

    }

    //监听 给this.el.nativeElement 添加 mousedown事件  $event相当于MouseEvent——》mousedownEvent
    @HostListener('mousedown', ['$event']) onMouseEnter(e) {
        //点关闭按钮不能移动对话框  
        let len: number = this.unDragTarget.length;
        for (let i = 0; i < len; i++) {
            if (e.target.classList.contains(this.unDragTarget[i])) {
                return;
            }
        }

        //webkit内核和火狐禁止文字被选中  
        $(this.el.nativeElement).addClass('select')
        //ie浏览器禁止文字选中  
        this.el.nativeElement.onselectstart = this.el.nativeElement.ondrag = function () {
            return false;
        }
        this.dragModal.mouseDragDown = true;

        this.dragModal.moveTarget =
            $(this.el.nativeElement).closest(this.domTarget + this.separator + this.dragTarget);
        this.dragModal.mouseStartPoint = { "left": e.clientX, "top": e.pageY };
        this.dragModal.basePoint = this.dragModal.moveTarget.offset();
        this.dragModal.topLeng = e.pageY - e.clientY;
    }

    // 鼠标弹起，销毁监听元素
    @HostListener('mouseup') onMouseup() {
        console.log("mouseup")
        this.dragModal.mouseDragDown = false;
        this.dragModal.moveTarget = undefined;
        this.dragModal.mouseStartPoint = { "left": 0, "top": 0 };
        this.dragModal.basePoint = { "left": 0, "top": 0 };
    }



    //domcument添加鼠标移动事件
    documentMousemove() {
        let obj = this;
        document.addEventListener("mousemove", function (e: any) {
            if (!obj.dragModal.mouseDragDown || obj.dragModal.moveTarget == undefined) {
                return;
            }
            // if(!obj.isDOMContains(obj.dragModal.moveTarget[0],e.target)){
            //     obj.onMouseup()
            //     return;
            // }g(

            
            var element = document.elementFromPoint(e.clientX, e.clientY);
            let el: HTMLElement = obj.dragModal.moveTarget[0];
         
            console.log("前" + (obj.getAbsLeft(element)));
            console.log("后" + obj.getAbsLeft(el))
            // if(obj.getAbsLeft(element)+ element.clientWidth>=obj.getAbsLeft(el) ){
            //     console.log(true);
            // }else{
            //     console.log(false);
            // }
            // console.log("当前" + obj.getAbsLeft(element));
            // console.log("目标" + obj.getAbsLeft(el));
            //     console.log(el.offsetLeft);
            //     console.log(el.clientLeft);
            //     console.log(el.style.left);;
            // console.log(e.target.offsetLeft);
            var mousX = e.clientX;
            var mousY = e.pageY;
            if (mousX < 0) mousX = 0;
            if (mousY < 0) mousY = 25;
            obj.dragModal.mouseEndPoint = { "left": mousX, "top": mousY };
            var width = obj.dragModal.moveTarget.width;
            var height = obj.dragModal.moveTarget.height;
            var clientWidth = document.body.clientWidth
            var clientHeight = document.body.clientHeight;
            if (obj.dragModal.mouseEndPoint.left < obj.dragModal.mouseStartPoint.left - obj.dragModal.basePoint.left) {
                obj.dragModal.mouseEndPoint.left = 0;
            }
            else if (obj.dragModal.mouseEndPoint.left >= clientWidth - width + obj.dragModal.mouseStartPoint.left - obj.dragModal.basePoint.left) {
                obj.dragModal.mouseEndPoint.left = clientWidth - width - 38;
            } else {
                obj.dragModal.mouseEndPoint.left = obj.dragModal.mouseEndPoint.left - (obj.dragModal.mouseStartPoint.left - obj.dragModal.basePoint.left);//移动修正，更平滑    

            }
            if (obj.dragModal.mouseEndPoint.top - (obj.dragModal.mouseStartPoint.top - obj.dragModal.basePoint.top) < obj.dragModal.topLeng) {
                obj.dragModal.mouseEndPoint.top = obj.dragModal.topLeng;
            } else if (obj.dragModal.mouseEndPoint.top - obj.dragModal.topLeng > clientHeight - height + obj.dragModal.mouseStartPoint.top - obj.dragModal.basePoint.top) {
                obj.dragModal.mouseEndPoint.top = clientHeight - height - 38 + obj.dragModal.topLeng;
            }
            else {
                obj.dragModal.mouseEndPoint.top = obj.dragModal.mouseEndPoint.top - (obj.dragModal.mouseStartPoint.top - obj.dragModal.basePoint.top);
            }
            obj.dragModal.moveTarget.offset(obj.dragModal.mouseEndPoint);
        })
    }



    getAbsRight(obj) {
        var l = obj.offsetLeft;
        while (obj.offsetParent != null) {
            obj = obj.offsetParent;
            l += obj.offsetLeft;
        }
        return l 
    }
    getAbsLeft(obj) {
        var l = obj.offsetLeft;
        while (obj.offsetParent != null) {
            obj = obj.offsetParent;
            l += obj.offsetLeft;
        }
        return l;
    }

    getAbsTop(obj){
        var l = obj.offsetLeft;
        while (obj.offsetParent != null) {
            obj = obj.offsetParent;
            l += obj.offsetLeft;
        }
        return l;
    }

}