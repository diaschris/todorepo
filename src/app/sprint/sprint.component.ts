import { Component, OnInit   } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router } from '../../../node_modules/@angular/router';
import { Sprint } from '../shared/interfaces.interface';


@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

private tasks:any[]=[];

 id=this.store.sprint;
 sprints:Sprint[]=[];
 sid=this.store.sprint1;
selected:any;

  constructor(private store:StoreService,private router:Router) { }

  ngOnInit() {

    this.sprints=this.store.getAllsprint(this.id);
    this.selected=this.store.sprint1;
    if(this.selected==this.store.sprint1){ 
    this.tasks=this.store.getAllTask(this.store.data,this.store.sprint1);
    }
    
  }
  a:any;

  selectname(event): void { 
 this.store.sprint1= event.target.value;
  this.tasks=this.store.getAllTask(this.store.data,this.store.sprint1);
 this.sid=  this.store.sprint1;
}

  
 
  editsprint(pid,sid)
  {
  
    this.store.data1=this.store.getsprint(pid,sid);
    this.router.navigate(['editsprint']);
   
  }

 
}
