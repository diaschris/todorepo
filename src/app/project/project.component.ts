import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router } from '../../../node_modules/@angular/router';
import { Sprint } from '../shared/interfaces.interface';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:any[]=[];
  singleclick:boolean=false;
  abc:any[]=[];
  constructor(private store:StoreService,private route:Router,private afauth: AngularFireAuth) { }
c:number=0;
  ngOnInit() {
    this.projects=this.store.getAllproject();
    // this.projects=this.store.deleteProject();
  

  }
 
  edit(data){
    this.store.data=data;
    this.route.navigate(['edit']);

  }
  sprint(id){
    this.store.sprint=id;
    this.route.navigate(['/sprint'])
   }
   logout(){
this.afauth.auth.signOut();
this.route.navigate(['/welcome']);
   }
 

}
