import { Component, OnInit } from '@angular/core';
import { StoreService } from './shared/store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  edit={
    Pname:"newp",
    Desc:"new"
}
newp={
  Pname:"proj1",
  pid:3,
  Desc:"hdshdfiuhfui",
  sprint:[]
}
editsp={
  Sname: "analysis",
  Desc: "hsd  jdha",
}
current={
  "Starttime": "1",
}
end={
  "Endtime": "7"
}
  constructor(private store:StoreService){

  }
  ngOnInit(){
    this.store.getAllproject();
    // this.store.getproject(2);
    // this.store.deleteProject(2);
    // this.store.editProject(1,this.edit);
    // this.store.addNewProject(this.newp)
    // this.store.getAllsprint(1);
    // this.store.deleteSprint(1,1);
    // this.store.editSprint(1,1,this.editsp);
    // this.store.getAllTask(1,1); 
    // this.store.deleteTask(1,1,1);
    // this.store.getSpecificTask(1, 1, 1);
    // this.store.getAllworkhour(1,1,1);
    // this.store.getTotalTime(1,1,2);
    // this.store.onstart(1,1,1);
    // this.store.onComplete(1,1,1);
    // this.store.getTotalTime(1,1,1);
    // this.store.onstart(1,1,1);
    // this.store.onPause(1,1,1);
    // this.store.getTotalTime(1,1,1);

  }
}
