import { Injectable } from '@angular/core';
// import { Sprint, Projects, WorkHour } from './interfaces.interface';
import { todo } from '../data/data';
import { Projects, Sprint, Task } from './interfaces.interface';
import { splitClasses } from '../../../node_modules/@angular/compiler';
import { SimpleWebDriverClient } from '../../../node_modules/blocking-proxy/built/lib/simple_webdriver_client';
import { element } from '../../../node_modules/@angular/core/src/render3/instructions';



@Injectable({
    providedIn: 'root'
})
export class StoreService {
    todo: any[]=[];
    after: any[]=[];
    currentsp: any[]=[];
    data:any[]=[];
    editdata:any[]=[];
    
    sprint:any[]=[];
    task:any[]=[];
    sprint1:any;
    constructor() { }

    getAllproject() {
        this.todo = todo.project;
        console.log(this.todo);
        
        return this.todo;
        
    }





    // ////////////////////project//////////////////////////

    addNewProject(pro) {
        this.todo.push(pro);
        this.getAllproject();
        

    }

    deleteProject(id) {
        const i=this.todo.findIndex((el)=>el.pid===id);
        // console.log(i);
        // for (let i = 0; i < this.details.length; i++) {
        //     if (id == this.details[i].pid) {
                this.todo.splice(i, 1);
               return this.getAllproject();

        //     }


        // }
    }

    editProject(id, data) {
        for (let i = 0; i < this.todo.length; i++) {
            if (id == this.todo[i].pid) {
                this.todo[i].Pname = data.Pname;
                this.todo[i].Desc = data.Desc;
                this.getAllproject();


            }
        }
    }


    getproject(id) {
        this.todo.forEach(element => {
            if (id == element.pid) {
                console.log(element);
              
            }


        });
       
    }
    /////////////////////////end project//////////////////////



    ////////////////////////////sprint////////////////////////////
    getAllsprint(pid) {
        console.log(this.todo)
        this.todo.forEach(element => {
            if (pid == element.pid) {
                this.currentsp = element.Sprint;
            
            }
        });
        return this.currentsp;
    }


    editSprint(id,stid,sprint) {
        this.getAllsprint(id);
        for(var i = 0; i < this.currentsp.length; i++) {
            if(this.currentsp[i].sid == stid) {
                this.currentsp[i].Sname = sprint.Sname;
                this.currentsp[i].Desc = sprint.Desc;       
                 }
        }
        console.log(this.currentsp,"after editing")
    }
    addNewSprint(pid,sprint) {
        this.getAllsprint(pid)
        console.log(this.currentsp,"hj")
        this.currentsp.push(sprint);
        console.log(this.currentsp,"after adding");
    }
  

    getsprint(pid,sid) {
        this.getAllsprint(pid);
        this.currentsp.forEach(element => {
            if(element.sid==sid){
                console.log(element,"get specific sprint")
            }
            
        });

    }





    fg: boolean = false;
    deleteSprint(pid, sid) {
        this.getAllsprint(pid);
          const i= this.currentsp.findIndex((el)=>el.sid===sid);
          console.log(i)
                this.currentsp.splice(i, 1);
    
        console.log(this.todo, "after deleting")

    }
   
    ///////////////////////end task/////////////////////////
    currenttask: any;
    getAllTask(pid, sid) {
        this.getAllsprint(pid);
        this.currentsp.forEach(element => {
            if (sid == element.sid) {
                this.currenttask = element.Task;
                console.log(this.currenttask, "Task")
            }
        });
        return this.currenttask;
    }
    getSpecificTask(pid, sid, tid) {
        this.getAllTask(pid, sid);
        this.currenttask.forEach(element => {
            // console.log(tid, element.Id)
            if (tid == element.tid) {
                console.log(element, "specific task")
            }
        });
    }
    fb: boolean = false;
    deleteTask(pid, sid,tid) {
        this.getAllTask(pid, sid);
        console.log(this.currenttask)
        for (var i = 0; i < this.currenttask.length; i++) {
            if (this.currenttask[i].tid == tid) {
                this.fb = true;
                this.currenttask.splice(i, 1);
            }
        }
    }



    editTask(pid,sid,tid,task) {
        this.getAllTask(pid,sid);
        for(var i = 0; i < this.currenttask.length; i++) {
            if(this.currenttask[i].Id == tid) {
                this.currenttask[i].Name = task.Name;
                this.currenttask[i].Desc = task.Desc;       
                 }
        }
        console.log(this.currenttask,"after editing")
    }


    addNewTask(pid,sid,task) {
        this.getAllTask(pid,sid);
        this.currenttask.push(task);
        console.log(this.currenttask,"after adding");
    }


/////////////////end task///////////////////

////////////////////timegroup///////////////////

    workinghour:any[]=[];
    getAllworkhour(pid, sid,tid) {
        this.getSpecificTask(pid,sid,tid);
        this.currenttask.forEach(element => {
            if (tid == element.tid) {
                this.workinghour= element.Timegroup;
                console.log(this.workinghour, "all work hours");
            }
        });
    }


    t=0;
    total:any[]=[];
    tot:any[]=[];
    getTotalTime(pid, sid, tid) {
        this.getAllworkhour(pid,sid,tid);
        console.log(this.workinghour)
        this.workinghour.forEach(element => {
                 this.t=this.t+(element.Endtime-element.Starttime);
               
            });
            if(this.stflag==1)
            {
                this.status="inprogress";
            }else if(this.stflag==2){
                this.status="Backlog";
            }else  if(this.stflag==3){
                this.status="completed";
            }else{
                this.status="todo";
            }
        console.log(this.t,"total");
        console.log(this.status,"status");
    }
   
 
    // currenttm="5";
    // endtm="7";
    newtime:any[]=[];
    stflag:number=1;
    status:string;
    onstart(pid,sid,tid) {
        this.stflag=1;
        this.getAllworkhour(pid,sid,tid);
        this.newtime.push({"Starttime":"5"});
        console.log(this.newtime,"new");
      
        

        //set cuurent time to start time
        //udate staus to inprogress
    }
    a:any;
    onComplete(pid,sid,tid) {
        this.stflag=3;
       
        this.getAllworkhour(pid,sid,tid);

       this.a= this.newtime.map((el)=>{
            return {...el,"Endtime":"7"}});
        console.log(this.a,"new");
        for(let i=0;i<this.a.length;i++){
        this.workinghour.push(this.a[i]);
        }
        console.log(this.workinghour,"added");


    
        // console.log(this.workinghour,"gedsh");

        //set current time to end time
        //update status to complete
    }
b:any[]=[];

    onPause(pid,sid,tid) {
        this.stflag=2;
        
        
        this.getAllworkhour(pid,sid,tid);

        this.b= this.newtime.map((el)=>{
             return {...el,"Endtime":"8"}});
         console.log(this.b,"new1");
         for(let i=0;i<this.b.length;i++){
         this.workinghour.push(this.b[i]);
         }
         console.log(this.workinghour,"added11");
      
        // set current time to end time
        // //update status to backlog
    }

  




        


    }
