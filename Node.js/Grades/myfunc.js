var fs = require("fs");

const studentGrades = [
    {"name":"John",grade:"95"},
    {"name":"Max",grade:"100"},
    {"name":"Philip",grade:"88"},
    {"name":"Carl",grade:"72"},
    {"name":"Lorenzo",grade:"55"},
    {"name":"Heinz",grade:"68"}
];

fs.writeFileSync("grades.json",JSON.stringify(studentGrades));
console.log("we have the file :)");


