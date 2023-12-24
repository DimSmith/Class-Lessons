var myList = [];

const addEvent = ()=>{
    console.log("adding event");
    var newOccasion = new Object();
    newOccasion.occasionName = document.getElementById("occasionName").value;
    newOccasion.minPrice = document.getElementById("minPrice").value;
    newOccasion.maxPrice = document.getElementById("maxPrice").value;
    newOccasion.occasionType = document.getElementById("occasionType").value;
    newOccasion.imgUrl = document.getElementById("imgUrl").value;
    newOccasion.occasionDate = document.getElementById("occasionDate").value;

    // check if there is a logic in the data
    if (newOccasion.minPrice>newOccasion.maxPrice){
        alert ("minimum price is bigger then maximum price");
        return;
    }
    if (new Date(newOccasion.occasionDate)<new Date()){
        alert ("you can not add events in the past");
        return;
    }
    myList.push(newOccasion);
    
    //create table
    createTable();

    //reset form
    resetForm();
}

const resetForm = ()=>{
    document.getElementById("myForm").reset();
}

const createTable = ()=>{
    var tableHeader = `
        <table border="1" cellspacing="0">
            <tr>
                <th>Name</th>
                <th>Min</th>
                <th>Max</th>
                <th>Type</th>
                <th>Date</th>
                <th>Picture</th>
            </tr>
    `
    var tableBody = ()=>{
        for (var index=0;index<myList.length;index++){
            myTable += `
            <tr>
                <td>${myList[index].occasionName}</td>
                <td>${myList[index].minPrice}</td>
                <td>${myList[index].maxPrice}</td>
                <td>${myList[index].occasionType}</td>
                <td>${niceDate(myList[index].occasionDate)}</td>
                <td><img src="${myList[index].imgUrl}" width="100"/></td>
            </tr>
        `;
        return myTable;
    }
    }
    var tableFooter = '</table>'
    document.getElementById("myTable").innerHTML = tableHeader + tableBody() + tableFooter;
}

const niceDate = (oldDate)=>{
    var newDate = oldDate.split('-');
    return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
}