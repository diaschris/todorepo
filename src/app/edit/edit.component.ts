import { Component, OnInit, Input } from '@angular/core';
import { Projects } from '../shared/interfaces.interface';
import { StoreService } from '../shared/store.service';
import { Router } from '../../../node_modules/@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
  projects: Projects;

data=this.store.data;

  constructor(private store:StoreService,private route:Router){}
  ngOnInit() {
  }
  oncancel(){
    this.route.navigate(['/project']);
  }
  

}