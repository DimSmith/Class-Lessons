import { Exchange } from "../../model/coin/Excange";
import "./singleExcange.css";

function SingleExcange(props: Exchange): JSX.Element {
    return (
        <div className="singleExcange Box">
			<div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.rank}</div>
            <div>{props.percentTotalVolume}</div>
            <div>{props.volumeUsd}</div>
            <div>{props.tradingPairs}</div>
            <div>{props.exchangeUrl}</div>
        </div>
    );
}

export default SingleExcange;
