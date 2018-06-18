import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'drag-modal',
  templateUrl: './drag.component.html'
})


export class DragComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // //拖拽的目标的class属性
  dragTarget = "m";
  // //拖拽的目标的元素标签
  // domTarget = "div";
  // //class/id 连接符
  // separator = "#";

  // unDragTarget=["close","un"]

}






