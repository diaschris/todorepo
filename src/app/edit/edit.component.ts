import { Component, OnInit } from '@angular/core';

import { StoreService } from '../shared/store.service';
import { Router } from '../../../node_modules/@angular/router';
import { Projects } from '../shared/interfaces.interface';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
  // projects: any[]=[];
  data=this.store.data;
sprint=this.store.sprint;

  constructor(public store:StoreService,private route:Router){}
  ngOnInit() {
  }
  oncancel(){
    this.route.navigate(['/project']);
  }
  

}