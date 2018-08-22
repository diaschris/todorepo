import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/interfaces.interface';
import { StoreService } from '../shared/store.service';


@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  @Input() task:Task;
  @Output() removetask4 = new EventEmitter();
  
  constructor(private store:StoreService) { }

  ngOnInit() {
  }
  


}
