import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/interfaces.interface';


@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {
  @Input() task:Task;
@Output() removetask1 = new EventEmitter();
@Output() removetask2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  pausecard(id){
    this.removetask1.emit(id);
 }
 complete(id){
  this.removetask2.emit(id);

 }

}
