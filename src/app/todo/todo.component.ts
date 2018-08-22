import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Task } from '../shared/interfaces.interface';
import { StoreService } from '../shared/store.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

@Input() task:Task;
@Output() removetask = new EventEmitter();
pid=this.store.sprint;
sid=this.store.sprint1;
  constructor(private store:StoreService) { 
    
  }

  ngOnInit() {
    
   
  }
  onstart(sprint,sprint1,tid){
    if(this.store.state==false){
  this.store.onstart(sprint,sprint1,tid)
    }

}

}
