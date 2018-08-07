import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incontainer',
  templateUrl: './incontainer.component.html',
  styleUrls: ['./incontainer.component.css']
})
export class IncontainerComponent implements OnInit {
  @Input() tasks:any[]=[];
  constructor() { }
 inpro:any[]=[];
  ngOnInit() {
  }
  remove(id){
    const i=this.tasks.findIndex((el)=> el.tid===id.tid)
    this.tasks[i].status="backlogs";
  
    }
    remove1(id){
      const i=this.tasks.findIndex((el)=> el.tid===id.tid)
      this.tasks[i].status="completed";
    
      }
}