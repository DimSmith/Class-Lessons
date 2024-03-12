import Cars from "../../rest/cars/cars";
import Gabriel from "../../targil/gabriel/gabriel";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import MainMenu from "../MainMenu/MainMenu";
import MainPage from "../MainPage/MainPage";
import Login from "../login/login";
import "./Mainlayout.css";

function Mainlayout(): JSX.Element {
    return (
        <div className="Mainlayout">
            <header>
                <MainHeader/>
            </header>

            <aside>
                <MainMenu/>
            </aside>

            <main>
                <Cars/>
            </main>

            <footer>
                <MainFooter/>
            </footer>
        </div>
    );
}

export default Mainlayout;
