import { Component, OnInit } from '@angular/core';
import { Workitem } from '../Workitem';
import { WorkitemService } from '../workitem.service';

@Component({
  selector: 'app-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent implements OnInit {

  workitems:Workitem[]=[];
  constructor(private ws:WorkitemService) { }

  ngOnInit() {
    this.workitems = this.ws.getWorkitem();
  }

}
