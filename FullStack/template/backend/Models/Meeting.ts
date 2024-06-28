export class Meeting{
    meetId:number;
    teamId:number;
    start:Date;
    finish:Date;
    purpose:string;
    room:string;

    constructor(meetId:number,teamId:number,start:Date,finish:Date,purpose:string,room:string){
        this.meetId=meetId;
        this.teamId=teamId;
        this.start=start;
        this.finish=finish;
        this.purpose=purpose;
        this.room=room;
    }
}