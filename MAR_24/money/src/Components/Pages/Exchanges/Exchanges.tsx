import { useEffect, useState } from "react";
import { Exchange } from '../../model/coin/Excange';
import "./Exchanges.css";
import axios from "axios";
import SingleExcange from "../../rest/singleExcange/singleExcange";

function Exchanges(): JSX.Element {
    const [exchanges,setExchanges] = useState<Exchange[]>([]);

    const exchangeURL= "http://api.coincap.io/v2/exchanges";
    
    useEffect(() => {     
        axios.get(exchangeURL).then(result => {
            //console.log(result.data.data);
            setExchanges(result.data.data);
        })
    },[]);
    
    
    return (
        <div className="MainPage">
			{exchanges.map((item, index) =><SingleExcange key={index} id={item.id}
            name={item.name} rank={item.rank} percentTotalVolume={item.percentTotalVolume}
            volumeUsd={item.volumeUsd} tradingPairs={item.tradingPairs} exchangeUrl={item.exchangeUrl}/>)}
        </div>
    );
}

export default Exchanges;
