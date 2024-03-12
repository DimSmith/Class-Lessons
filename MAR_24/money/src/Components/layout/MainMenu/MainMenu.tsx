import "./MainMenu.css";

function MainMenu(): JSX.Element {
    return (
        <div className="MainMenu">
            <h1>Main Menu</h1><hr/>
            <b>Assets</b><hr/>
            Assets by ID<br/>
            ID History<br/>
            ID Markets<br/><br/><hr/>
            <b>Rates</b><hr/>
            Rates<br/>
            Rates by ID<br/><br/><hr/>
            <b>Exchanges</b><hr/>
            Exchanges<br/>
            Exchanges by ID<br/><br/><hr/>
            <b>Markets</b><hr/>
            Markets<br/>
        </div>
    );
}

export default MainMenu;
