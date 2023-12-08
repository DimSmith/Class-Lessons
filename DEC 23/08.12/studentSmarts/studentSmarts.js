// constructor -> c'stor
function Student(studentName,studentClass,studentGrades) {
    //fields
    this.name = studentName;
    this.class = studentClass;
    this.grades = studentGrades;

    //methods
    this.getAvg = function(){
        let avg=this.grades[0];
        for (let index=1; index<this.grades.length ; index++) {
            avg += this.grades[index];
        }
        return avg/this.grades.length;
    }
    this.getMin = function(){
        let min= this.grades[0];
        for (let index=1; index<this.grades.length; index++) {
            if(this.grades[index]<min) {
                min = this.grades[index];
            }
            
        }
        return min;
    }

    this.tableHeader = function(){
        return `
        <table cellspacing="0" border="1" style="margin-left: auto; margin-right: auto;">
                <th>Name</th>
                <th>Class</th>
                <th>Average</th>
                `;
        
    }
    this.tableData = function(){
        return `
        <tr>
            <td>${this.name}</td>
            <td>${this.class}</td>
            <td>${this.getAvg()}</td>
        </tr>`;
    }
    this.tableFooter = function(){
        return `</table>`;
    }
}

function injTable(studentList){
    let myTable = studentList[0].tableHeader();
    for(let index=0;index<studentList.length;index++){
        myTable+=studentList[index].tableData();
    }
    myTable+=studentList[0].tableFooter();
    document.getElementById("res").innerHtml = myTable;
}

const student1 = new Student("Dima",48,[85,90,92,88,96]);
const student2 = new Student("Vika",48,[100,100,100,100,100]);
const student3 = new Student("Rafi",48,[70,85,90,78,86]);

injTable([student1, student2, student3]);