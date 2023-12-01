//if loop - while loop

var userNumber=prompt("Please enter number");
var digits=0;
var temp=userNumber;
while (temp>0){
    digits++;
    temp = parseInt(temp/10);
    //console.log(temp);
}
console.log("User Number: " ,userNumber, "has ",digits," digits");


//index loops