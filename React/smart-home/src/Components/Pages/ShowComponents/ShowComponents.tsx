import { Devices } from "../../../model/devices";
import { Epid } from "../../../model/epid";
import { Home } from "../../../model/home";
import { ShowEpid } from "../ShowEpid/ShowEpid";
import "./ShowComponents.css";

export function ShowComponents(): JSX.Element {
    //create some mock data.....
    let myHome = new Home(
        1,
        "mindali",
        [
            new Devices(
                1, "sallon","gp31",10,[
                    new Epid(1,"main light"),
                    new Epid(2,"Spot light"),
                    new Epid(3, "led strip")
                ]
            ),
            new Devices(
                2, "kitchen", "gp21",11,[
                    new Epid(1,"main kitchen light"),
                    new Epid(2,"Bucher light")
                ]
            )
        ]
    );
    return (
        <div className="ShowDevices ">
			<h1>{myHome.name}</h1>
            {myHome.devices.map((item,index)=>
            <div className="Box">
            
            node id: {item.id}<br/>
            node location: <input type="text" value="{item.location}"/><br/>
            node name : {item.name}<br/>
            <ShowEpid  key={index} endDevices={item.epid} /><br/>
            </div>
            )}
        </div>
    );
}
