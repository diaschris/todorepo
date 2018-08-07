import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/interfaces.interface';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input() task:Task;
@Output() removetask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  popcard(id){
    this.removetask.emit(id);


  }

}
