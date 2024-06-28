import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<h2> Choose Your Option</h2>
            <hr/>
            <NavLink to="/">Main Page</NavLink><br/>
            <hr/>
            <NavLink to="/TeamList">Option 1</NavLink><br/><br/>
            <NavLink to="/MeetingsID">Option 2</NavLink><br/><br/>
            <NavLink to="/AddMeeting">Option 3</NavLink><br/><br/>
        </div>
    );
}
