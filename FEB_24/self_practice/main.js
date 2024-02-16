const myURL ="https://restcountries.com/v3.1/all"
const searchUrl="https://restcountries.com/v3.1/name/"
$(() => {
    $("#all").on("click", () => {
        $.get(myURL, (data) => showStatistics(data),
        "json");
    });
    $("#searchName").on("click", () => {
        let userSearch = $("#specific").val();
        if(userSearch===undefined){
            return;
        }else{
            $.get(searchUrl+userSearch, (data) => showStatistics(data),
            "json");
        }
    });
});

const showStatistics=(data)=>{
    let totalPopulation = 0;
    let numberOfCountries = 1;
    let statistics = new Object();
    console.log(data);
    $("#countriesPopulation").append(`
                    <tr>
                        <th>Country Name</th>
                        <th>Number Of Citizens</th>
                    </tr>
    `)
    $("#regionCountries").append(`
                    <tr>
                        <th>Region</th>
                        <th>Number Of Countries</th>
                    </tr>
    `)

    for (let index=0; index<data.length; index++){

            totalPopulation += data[index].population;
            $("#countriesPopulation").append(`
                        <tr>
                            <td>${data[index].name.common}</td>
                            <td>${data[index].population}</td>
                        </tr>
            `)
            
            if (statistics[data[index].region] == undefined) {
                statistics[data[index].region] = numberOfCountries;
            } else {
                statistics[data[index].region] += numberOfCountries;
            }

    }
    displayStatistics(statistics);

    let avaragePopulation = Math.round(totalPopulation/data.length);
    $("#response").html(`
        Total Countries Result:${data.length}<br/>
        Total Countries Population:${totalPopulation}<br/>
        Average Population:${avaragePopulation}<br/>
    `)

    
}

const displayStatistics = (data) => {
    for(item in data) {
        $("#regionCountries").append(`
            <tr>
                <td>${item}</td>
                <td>${data[item]}</td>
            </tr>`);
    }
}