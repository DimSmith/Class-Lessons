const inputTypes = () => {
    var form = `
    <input type="number" placeholder="Plate Number" id="plateNumber/><br /><br />
    <input type="text" placeholder="field1" id="field1"/><br /><br />
    <input type="text" placeholder="field2" id="field2"/><br /><br />
    <input type="text" placeholder="field3" id="field3"/><br /><br />
    <input type="text" placeholder="field4" id="field4"/><br /><br />
    <input type="text" placeholder="field5" id="field5"/><br /><br />
    <input type="text" placeholder="field6" id="field6"/><br /><br />
    <input type="text" placeholder="field7" id="field7"/><br /><br />
    <input type="button" value="add Car" id="add" /><br /><br />
    `
    document.getElementById("mySite").innerHTML = form;
}
inputTypes();

function Cars(plateNumber,field1,field2,field3,field4,field5,field6,field7){
    this.plateNumber=plateNumber;
    this.field1=field1;
    this.field2=field2;
    this.field3=field3;
    this.field4=field4;
    this.field5=field5;
    this.field6=field6;
    this.field7=field7;
}

const addCar = ()=>{
    var plateNumber = document.getElementById("plateNumber").value;
    var field1 = document.getElementById("field1").value;
    var field2 = document.getElementById("field2").value;
    var field3 = document.getElementById("field3").value;
    var field4 = document.getElementById("field4").value;
    var field5 = document.getElementById("field5").value;
    var field6 = document.getElementById("field6").value;
    var field7 = document.getElementById("field7").value;
    cars.push(new Tasks(plateNumber,field1,field2,field3,field4,field5,field6,field7));
    createTable();
}
var adding = document.getElementById("add").addEventListener("click", addCar);

function createTable(){
    var result = `<table border="1" cellSpacing="0" style="margin-left:auto;margin-right:auto">`;
    var cars = [];
    for (var index=0;index<cars.length;index++){       
        result += `
            <tr>
                <td>${cars[index].plateNumber}</td>
                <td>${cars[index].field1}</td>
                <td>${cars[index].field2}</td>
                <td>${cars[index].field3}</td>
                <td>${cars[index].field4}</td>
                <td>${cars[index].field5}</td>
                <td>${cars[index].field6}</td>
                <td>${cars[index].field7}</td>
            </tr>
        `;
    }
    result+="</table>" 
    document.getElementById("mySite").innerHTML = result;
}







