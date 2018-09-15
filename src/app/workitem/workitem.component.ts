import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkitemServiceI } from './workitem.service';
import { WorkitemAuro } from '../workitem-auro';

@Component({
  selector: 'app-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent implements OnInit {

  workitems:WorkitemAuro[]=[];
  //ajouter un WorkItem
  workItemForm:FormGroup;
  constructor(private ws:WorkitemServiceI,
              private fb:FormBuilder) {
  this.workItemForm = this.fb.group({
    identifier:'',
    summary:['',Validators.required],
    status:'',
    gbu:'',
    organisation:'',
    project:'',
    ownedby:'',
    deliveryTeamInCharge:'',
    description:'',


   
    
 
  
  });
}  



  ngOnInit() {
    // this.workitems = this.ws.getProduits();
    this.loadWorkItem();
  }
  loadWorkItem(){
    this.ws.getProduits().subscribe(
      data => {this.workitems = data;console.log(this.workitems);
      },
      error => {console.log('An error was occured.')
      },
      ()=>{console.log('loding produits was done.');
      }
    );
  }

}
