import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../shared/store.service';


@Component({
  selector: 'app-incontainer',
  templateUrl: './incontainer.component.html',
  styleUrls: ['./incontainer.component.css']
})
export class IncontainerComponent implements OnInit {
  @Input() tasks:any[]=[];
  
  constructor(private store:StoreService) { }
 
  ngOnInit() {
  }
  
 
   

}