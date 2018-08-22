export interface Projects {
Pname:string,
pid:string,
Desc:string,
Sprint:Sprint[]
totaltask:number;
}

export interface Sprint{

    Sname:string,
    sid:string,
    Desc:string,
    Task:Task[]
    hours:number;
    minutes:number;
}

export interface Task{
   tid:string,
    Name:string,
   Desc:string,
    Estimatedtime:Date,
    status : "completed" | "todo" | "inprogress" | "backlogs",
    Timegroup:Timegroup[]
   
    
    
}

export interface Timegroup{
    Starttime:string,
    Endtime:string
}




