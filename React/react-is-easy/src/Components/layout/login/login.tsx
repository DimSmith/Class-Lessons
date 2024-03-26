import { SyntheticEvent, useEffect, useState } from "react";
import "./login.css";

function Login(): JSX.Element {
    const [ourTime,setTime] = useState(new Date().toLocaleDateString());
    const [userName,setUserName] = useState("");
    const [userPass,setUserPass] = useState("");

    const updateUserName =(e:SyntheticEvent) => {
        //console.log((e.target as HTMLInputElement).value);
        setUserName((e.target as HTMLInputElement).value);
       //console.log("user name:",userName);
    };
    const updateUserPass =(e:SyntheticEvent) => {
        setUserPass((e.target as HTMLInputElement).value);
        //console.log("user pass:",userPass);
    }
    const showCred = () => {
            console.log("user name:",userName, "user password:",userPass);
    };

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        },800);
    },[])
    
    return (
        <div className="login Box">
                <h2>Login Form</h2><hr />
                <input type="text" placeholder="User Name" onKeyUp={updateUserName}></input><br />
                <input type="password" placeholder="User Password" onKeyUp={updateUserPass}></input><br />
                <input type="button" value="Login" onClick={showCred}></input>
                <hr />
                    hello {userName}
                <hr />
                {ourTime}
        </div>
    );
}

export default Login;
