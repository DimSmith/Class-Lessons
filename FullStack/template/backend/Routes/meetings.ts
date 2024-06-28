import express , {NextFunction,Request,Response} from 'express';
import { addNewMeeting, getAllTeams, getMeetingsByTeamId  } from '../logic/MeetingLogic';
import { Meeting } from '../Models/Meeting';

const meetingRouter = express.Router();

//get all teams
meetingRouter.get("/teams/all",async (request:Request,response:Response,next:NextFunction)=>{
    try{
        const servers = await getAllTeams();
        response.status(200).json(servers);
    } catch (err){
        next (err); 
    }
})

//get meeting by team id
meetingRouter.get("/meetings/:teamId",async (request:Request,response:Response,next:NextFunction)=>{
    try{
        const meetings = await getMeetingsByTeamId(+request.params.teamId);
        response.status(200).json(meetings);
    } catch (err){
        next (err); 
    }
})


//post new meeting
meetingRouter.post("/meetings/add",async (request:Request,response:Response,next:NextFunction)=>{
    try{
        const newMeeting = new Meeting(request.body.meetId,request.body.teamId,request.body.start,request.body.finish,request.body.purpose,request.body.room);
        const addMeeting = await addNewMeeting(newMeeting);
        response.status(200).json(addMeeting);
    } catch (err){
        next (err); 
    }
})


export default meetingRouter;
