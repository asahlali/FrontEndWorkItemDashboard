import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//deleger le commandement de la propriété ShowHideSidebar
@Input()
ShowSidebar:boolean;
@Output()
showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  afficherSidebar(){
    this.ShowSidebar = !this.ShowSidebar;
    console.log("Click"+this.ShowSidebar);
    this.showSideBarChange.emit(this.ShowSidebar);
  }

}
