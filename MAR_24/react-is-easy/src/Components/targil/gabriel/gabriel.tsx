import { SyntheticEvent, useState } from "react";
import "./gabriel.css";

function Gabriel(): JSX.Element {
    const [victimName,setVictim] = useState("");
    const [displayName, setDisplay] = useState(false);

    const handleName = (e:SyntheticEvent)=>{
        setVictim((e.target as HTMLInputElement).value);
    }

    const checkName = (e:SyntheticEvent)=>{
        if(victimName.toLowerCase().includes("gabriel")){
            setVictim("Azriel");
        }
        setDisplay(true);
    }

    return (
        <div className="gabriel Box">
            <h2>Who am i?</h2>
            <input type="text" placeholder="Victim Name" /><br/>
            <input type="button" value={"send"} onClick={checkName}/>
            <hr/>
            {displayName && `hello ${victimName}`}
        </div>
    );
}

export default Gabriel;
