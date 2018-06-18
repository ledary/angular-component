import {Injectable, Injector, ComponentFactoryResolver} from '@angular/core';



@Injectable()
export class ModalService {
    
  constructor() {}
  open(content:HTMLElement,src:any,options:any){
         let containerEl;
				 if(options.container  != null){
					 const containerSelector = options.container;
    let containerEl = document.getElementById(containerSelector);
		console.log(content);
	
    containerEl.appendChild(content);
				 }
    console.log(containerEl);
   	 content.style.top=options.top;
    content.style.left = options.left;


 
  
    this.lock(src);
  }



  lock(src:any){
 
		src.style.width = this.getInner().width + 'px';
		src.style.height = this.getInner().height + 'px';
		src.style.display = 'block';
    }

    getInner(){

let body = document.getElementById('body');
	if (typeof window.innerWidth != 'undefined') {
		return {
			width : document.documentElement.clientWidth,
			height : document.documentElement.clientHeight
		}
	} else {
		return {
			width : document.documentElement.clientWidth,
			height : document.documentElement.clientHeight
		}
	}
}

close(){
    let src = document.getElementById("screen");
		src.style.width = this.getInner().width + 'px';
		src.style.height = this.getInner().height + 'px';
		src.style.display = 'none';
}

}
