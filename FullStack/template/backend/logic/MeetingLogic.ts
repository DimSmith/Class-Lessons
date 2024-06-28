import dal_mysql from "../DAL/dal_mysql";
import { Meeting } from "../Models/Meeting";

//get all teams
const getAllTeams = async()=>{
    //SQL statement
    const sql = `
        SELECT * 
        FROM \`teams\`
    `;
    //execute the sql command
    const allServers = await dal_mysql.execute(sql);
    //return the result
    return allServers;
}

//get meetings by team id
const getMeetingsByTeamId = async(teamId:number)=>{
    //SQL statement
    const sql = `
        SELECT * 
        FROM \`meetings\`
        WHERE \`meetings\`.teamId = ${teamId};
    `;
    //return the result
    return await dal_mysql.execute(sql);
}

//add new meeting
const addNewMeeting = async(newMeeting:Meeting)=>{
    const startDate = new Date(newMeeting.start).toISOString().slice(0, 19).replace('T', ' ');
    const finishDate = new Date(newMeeting.finish).toISOString().slice(0, 19).replace('T', ' ');
    const sql =`
    INSERT INTO \`meetings\` (meetId, teamId ,start,finish,purpose,room)
    VALUES (0, ${newMeeting.teamId}, '${startDate}', '${finishDate}', '${newMeeting.purpose}', '${newMeeting.room}')
    `;
    return await dal_mysql.execute(sql);
}

export  {
    getAllTeams,
    getMeetingsByTeamId,
    addNewMeeting
}