import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Task } from '../shared/interfaces.interface';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
 @Input() tasks:any[]=[];

 


  
  constructor(private store:StoreService) { }
  
  ngOnInit() {
  
    
  }

  
}
