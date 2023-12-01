var max=prompt("Please enter first number");
var den=prompt("Please enter second number");
var counter=0;

while (counter <= max){
    if (counter%den==0){
        console.log(counter);
    }
    counter++;
} 