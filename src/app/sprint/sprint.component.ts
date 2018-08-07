import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {
private tasks:any[]=[];
 id=this.store.sprint;
 data=this.store.data;
 sprints:any[]=[];
  constructor(private store:StoreService,private router:Router) { }
  

  ngOnInit() {
    console.log(this.id);
  
    this.sprints=this.store.getAllsprint(this.id);
    console.log(this.sprints,"allsp");
    
    
  }
  selectname(event): void { 
    const newVal = event.target.value;
  this.tasks=this.store.getAllTask(this.store.data,newVal);
  this.store.task=this.tasks;
}
  // console.log(this.store.task,"yu");
  sprintid(id){
    this.store.sprint1=id;
    console.log(this.store.sprint1,"abcd");
  }
  // editsprint(data)
  // {
  //   this.store.editdata=data;
  //   this.router.navigate(['editsprint']);
  // }
 
}
