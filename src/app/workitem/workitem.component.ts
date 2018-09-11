import { Component, OnInit } from '@angular/core';
import { Workitem } from '../Workitem';
import { WorkitemService } from '../workitem.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent implements OnInit {

  workitems:Workitem[]=[];
  //ajouter un WorkItem
  workItemForm:FormGroup;
  constructor(private ws:WorkitemService,
              private fb:FormBuilder) {
  this.workItemForm = this.fb.group({
    identifier:['',Validators.required],
    summary:['',Validators.required],
    status:['',Validators.required],
    gbu:['',Validators.required],
    organisation:['',Validators.required],
    project:['',Validators.required],
    ownedby:['',Validators.required],
    deliveryTeamInCharge:['',Validators.required],
    description:['',Validators.required],


   
    
 
  
  });
}  



  ngOnInit() {
    this.workitems = this.ws.getWorkitem();
  }

}
