import "./MainMenu.css";

function MainMenu(): JSX.Element {
    let mainMenu =[
        {id:1, name:"Add Single Gang"},
        {id:2, name:"Add Double Gang"},
        {id:3, name:"Add Triple Gang"},
        {id:4, name:"Add Nonuple Gang"},
        {id:5, name:"Add Control Panel"},
        {id:6, name:"Add Sensor"},
        {id:7, name:"Add Shutter"},
        {id:8, name:"Import Data"},
        {id:9, name:"Export Data"},
        {id:10, name:"Send To Server"},
    ]
    return (
        <div className="MainMenu">
            <b>Main menu</b>
            <hr/>
            {/* {myMenuItem.map(item=>
                <>                     
                    <span key={item.id}>{item.name}</span>                                    
                    {item.id==7 && <hr/>}                    
                    {item.id==9 && <hr/>}
                    <br/>
                </>
            )} */}
            TBC
        </div>
    );
}

export default MainMenu;
