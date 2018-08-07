import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../shared/store.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
 @Input() tasks:any[]=[];

  data1:any[]=[];
  constructor(private store:StoreService) { }
  
  ngOnInit() {
  
    
  }
  remove(id){
    this.data1=id;
    const i=this.tasks.findIndex((el)=> el.tid===id.tid)
    this.tasks[i].status="inprogress";
    console.log(i,"i");
    }
}
