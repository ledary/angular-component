import { Component, OnInit, trigger, transition, style, state, animate } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: './apptest.html',
  styleUrls: ['./app.component.css'],
  // styleUrls: ['./test.css'],

  animations: [
    trigger('overlayState', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('visible => hidden', animate('400ms ease-in')),
      transition('hidden => visible', animate('400ms ease-out'))
    ])
  ]

})

export class AppComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute
  ) { 
    console.log(route);
    console.log(router)
  }
  ngOnInit() {

  }

  jump() {
    this.router.navigateByUrl("showcase");
  }

  menuActive: boolean;

  activeMenuId: string;
  onMenuButtonClick(event: Event) {
    console.log(Event)
    this.menuActive = !this.menuActive;
    event.preventDefault();

  }

  hiddenSidebar(e: any) {
    this.menuActive = false;
  }
count = 1;
  jroute(){
    let id = this.count;
    this.count++;
    this.router.ngOnDestroy();
    this.router.navigateByUrl("showcase/datatable/"+id);

  }

}






