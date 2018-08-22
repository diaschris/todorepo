import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { FormGroup, FormArray, FormControl, Validators } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-editsprint',
  templateUrl: './editsprint.component.html',
  styleUrls: ['./editsprint.component.css']
})
export class EditsprintComponent implements OnInit {
  id=this.store.sprint;
  sid=this.store.sprint1;
data=this.store.data1;
// tasks=this.store.data2;
sprintForm1:FormGroup;
  constructor(private store:StoreService) { }


  ngOnInit() {
    
   
   
  }
  deleteTask(pid,sid,task){
  if(task.status!="completed"){
    this.store.deleteTask(pid,sid,task.tid)
  }
}
  


}
