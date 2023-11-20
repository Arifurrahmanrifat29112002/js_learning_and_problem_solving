//access json file
const data = require("./students.json");
//console log the array of students
    console.log(data);
//access single value
    console.log(data.students[0].name);
//modifie
     data.students[0].name = "Arifur Rahman";
     console.log(data); //name: 'Arifur Rahman',
//delete
     delete data.students[0].name;
     console.log(data);