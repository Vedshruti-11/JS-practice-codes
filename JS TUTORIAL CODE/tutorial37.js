console.log("Tutorial 37");

//Pretend that this request is coming from the server
const students = [
    { name: "harry", subject: "javascript" },
    { name: "vedshruti", subject: "machine learning" }
]

function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent, getStudents);
//getStudents()