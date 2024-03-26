import Gang1 from "../../modules/gang1/gang1";

import Gabriel from "../../stam/Gabriel/Gabriel";
import "./MainPage.css";

function MainPage(): JSX.Element {
    /*
    let bestStudent:String = "Matti";
    let complicatedStudent:String = "Gabriel";

    let devices:number = 120;
    let total:number = 80; 

    let normalDay:String ="Prepared Food";
    let weekend:String = "Salmon with Potatoes";
    let isWeekend:boolean = false;
    let weekendMessage:String ="Weekend !!!! time to relax"

    let studentsInClass =[
        {id: 1, name :"Student 1"},
        {id: 2, name :"Student 2"},
        {id: 3, name :"Student 3"},
        {id: 4, name :"Student 4"},
        {id: 5, name :"Student 5"},
        {id: 6, name :"Student 6"},
    ]*/
    let myDevice=[
        {id:1, nodeId:10,name:"entrance", location:"main-floor"},
        {id:2, nodeId:11,name:"dinning", location:"main-floor"},
        {id:3, nodeId:12,name:"kitchen", location:"main-floor"},
    ]

    return (
        <div className="MainPage">
            {/*
			<Gang1 nodeId={10} name={"entrance"} location={"Main-Floor"}/>
            <Gang1 nodeId={12} name={"dinning"} location={"Main-Floor"}/>
            */}
            {myDevice.map(item=><Gang1 
            key={item.id} nodeId={item.nodeId} name={item.name} location={item.location}
            />)}
        </div>
    );
}

export default MainPage;


/*
            Welcome to our REACT Project<br /><br />
            Our best student is:{bestStudent} and complicated one is:{complicatedStudent}<br /><br /><hr />
            Devices {devices} / Total {total}
            <br />
            <div className="Box">
                Today we are eating {isWeekend?weekend:normalDay}<br /><br />
                {isWeekend && weekendMessage}
            </div>
            {isWeekend && <Gabriel/>}<br/><br />
            {studentsInClass.map(item=><span key={item.id}>{item.name} | </span>)}

*/