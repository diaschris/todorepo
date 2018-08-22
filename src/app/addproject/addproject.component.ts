import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { NgForm } from '../../../node_modules/@angular/forms';
// import * as shortid from './shortid';
import shortid from 'short-id';
import { todo } from '../data/data';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  j:number=3;
//  shortid = require('short-id');
  submitted=false;
  newp={
    Pname:'',
    pid:Math.random().toString(36).substr(2,7),
    Desc:'',
    Sprint:[]=[]
  }
  
  @ViewChild('f') submitform:NgForm;

  constructor(private store:StoreService,private route:Router) { }

  ngOnInit() {
    
    
  }

OnSubmit(){
  
  this.submitted=true;
  // this.newp.pid=this.submitform.value.userdata.id;
  this.newp.Pname=this.submitform.value.userdata.pname;
  this.newp.Desc=this.submitform.value.userdata.desc;
  this.store.addNewProject(this.newp);
  this.submitform.reset();
  this.route.navigate(['/project'])

}

}
