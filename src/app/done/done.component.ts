import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/interfaces.interface';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  @Input() task:Task;
  constructor() { }

  ngOnInit() {
  }

}
