import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/interfaces.interface';

@Component({
  selector: 'app-donecontainer',
  templateUrl: './donecontainer.component.html',
  styleUrls: ['./donecontainer.component.css']
})
export class DonecontainerComponent implements OnInit {
  @Input() tasks:any[]=[];
  constructor() { }

  ngOnInit() {
  }

}
