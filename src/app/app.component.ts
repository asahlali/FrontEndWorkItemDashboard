import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndWorkItemDashboard';
  ShowHideSidebar: boolean =false

  onshowSideBarChange(ShowHideSidebar){
    console.log("Click"+ShowHideSidebar);
    
    this.ShowHideSidebar = ShowHideSidebar;
  }
}
