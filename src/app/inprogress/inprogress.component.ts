import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/interfaces.interface';
import { StoreService } from '../shared/store.service';


@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {
  @Input() task:Task[];

  constructor(private store:StoreService) { }

  ngOnInit() {
  }


}
