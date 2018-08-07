import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { NgForm } from '../../../node_modules/@angular/forms';

import { todo } from '../data/data';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  
  submitted=false;
  newp={
    Pname:'',
    pid:'',
    Desc:'',
    Sprint:[]=[]
  }
  
  @ViewChild('f') submitform:NgForm;

  constructor(private store:StoreService) { }

  ngOnInit() {
    
    
  }

OnSubmit(){
  this.submitted=true;
  this.newp.pid=this.submitform.value.userdata.id;
  this.newp.Pname=this.submitform.value.userdata.pname;
  this.newp.Desc=this.submitform.value.userdata.desc;
  this.store.addNewProject(this.newp);
  this.submitform.reset();
 

}

}
