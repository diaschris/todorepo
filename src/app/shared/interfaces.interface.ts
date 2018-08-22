export interface Projects {
pid:string,
name:string,
description:string,
sprint:Sprint[]
totaltask:number;
}

export interface Sprint{
    sid:string,
    Sname:string,
    description:string,
    task:Task[]
    hours:number;
    minutes:number;
}

export interface Task{
   tid:string,
    name:string,
    description:string,
    estimatedtime:Date,
    timegroup:Timegroup[],
    status : "completed" | "todo" | "inprogress" | "backlogs";
    
    
}

export interface Timegroup{
    Starttime:string,
    Endtime:string
}
export interface TaskCompleted {
    taskStatus:boolean;
}




