import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backcontainer',
  templateUrl: './backcontainer.component.html',
  styleUrls: ['./backcontainer.component.css']
})
export class BackcontainerComponent implements OnInit {
  @Input() tasks:any[]=[];

  constructor() { }

  ngOnInit() {
  }
  remove(id){

    const i=this.tasks.findIndex((el)=> el.tid===id.tid)
    this.tasks[i].status="inprogress";
    console.log(i,"i");
    }

}
