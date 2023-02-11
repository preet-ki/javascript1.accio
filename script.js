/** @format */

let students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
//marks above 50 using map function
students.map(function PrintStudentswithMap(values) {
  if(values.marks>50){
    console.log(values);
  }
});
//marks above 50 using forEach
students.forEach(function PrintStudentsbyForEach(values) {
 
  if(values.marks>50){
    console.log(values);
  }
});

//add new data
let student={id:4,name:"susan",age:"20",marks:45};
 function addData(){
   students.push(student);
  return students;
 }
 console.log(addData());
 
 //remove an element in an array
 function removeFailedStudent(values){
  return values.marks<50;
 }
 var res=students.filter(removeFailedStudent);
console.log(res);


//concat in an array
let peers = [
  { id: 4, name: "preeti", age: "18", marks: 80 },
  { id: 5, name: "kriti", age: "19", marks: 85 },
  { id: 6, name: "kiran", age: "30", marks: 35 },
];

function concatenateArray() {
  
  return students.concat(peers);
  
}
console.log(concatenateArray());