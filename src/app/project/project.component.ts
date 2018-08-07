import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router } from '../../../node_modules/@angular/router';
import { Sprint } from '../shared/interfaces.interface';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:any[]=[];
  
  constructor(private store:StoreService,private router:Router) { }

  ngOnInit() {
    this.projects=this.store.getAllproject();
    // this.projects=this.store.deleteProject();
  

  }
  edit(data){
    this.store.data=data;
    this.router.navigate(['edit']);

  }
  sprint(id){
    this.store.sprint=id;
   }
 

}
