/*
const number = prompt ("Enter a number");

if (number % 2 ==0 ){
    alert ("The number is even number ");
    
}
else {alert("The number is a odd number");}


let num1=prompt("Enter message");
if (typeof num1== 'number'){
    alert (num1 + " " + "is not a number");
}
else alert(num1+ " " + "is a number");



const num1 = prompt ("Enter 1st number");
const num2 = prompt ("Enter 2nd number");
if (num1 > num2) {
    alert (num1 + " " + "is greater than" + " " + num2);
} else if (num2 > num1) {
    alert (num2 + " "+ "is greater than" + " " + num1);
} else {
    alert ("they are equal");
}



const num1 = prompt ("Enter 1st number");
const num2 = prompt ("Enter 2nd number");
const num3 = prompt ("Enter 3rd number");
if (num1 > num2 || num1 > num3) {
    alert (num1 + " " + "is greater than" + " " + num2 + " " + num3);
} else if (num2 > num1 || num2 > num3) {
    alert (num2 + " "+ "is greater than" + " " + num1 + " "+ "and"+ " " + num3);
}
else if ( num3 > num2 || num3 > num1) {
    alert (num3 + " " + "greater than" + " " + num1 + " "+ " and" + " " + num2);
}
else {
    alert ("they are equal");
}



const age = prompt("Enter age of citizen");
if (age > 18) {
    alert ("You are eligible to vote");
} else {
    alert ("You are not eligible to vote");
}


let grade = prompt("Enter student's score");
if (grade > 70 ){
    alert("Student's grade is A");
} else if (grade >= 60 ){
    alert("Student's grade is B");
} else if (grade >=50){
    alert("Student's grade is C");
} else if ( grade >= 45){
    alert("Student's grade is D");
} else if (grade <49 , grade >0) {
    alert("Student's grade is F");
} else {
    alert ("Enter a valid number");
}

const grade = prompt("Enter student's score");
if (grade >=70 && grade <=100){
    alert("Student's grade is A");
} else if (grade >= 60 && grade <= 69){
    alert ("Student's grade is B");
} else if (grade >=50 && grade<=59){
    alert("Student's grade is C");
} else if (grade >= 45 && grade <= 49){
    alert("Student's grade is D ");
} else if (grade <= 44 && grade >= 0){
    alert("Student's grade is F")
} else {
    alert ("Enter a number between 1-100");
}

*/

let grade = prompt("Enter Student's score"); 
switch(true){
    case (grade >= 70 && grade <= 100):
        alert("Student's grade is A");
        break;
    case "grade <70 && grade >=60":
        alert("student's grade is B");
            break;
    case "grade <60 && grade >=50":
        alert("student's grade is C");
            break;
    case "grade <50 && grade >=45":
        alert("student's grade is   D");
            break;
    case "grade <=45 && grade >=0":
        alert("student's grade is   F");
            break;
    default:
        alert ("Enter a value between 0 - 100");     
}


// let grade = prompt("Enter Student's score"); 
// A = (grade >=70 && grade <=100);
// switch(grade){
//     case "A":
//         alert("The student scored between 70-100 marks");
//         break;
//     case "B":
//         alert("The student scored between 60-69 marks");
//             break;
//     case "C":
//         alert("The student scored between 50-59 marks");
//             break;
//     case "D":
//         alert("The student scored between 45-49 marks");
//             break;
//     case "F":
//         alert("The student scored below 45 marks");
//             break;
//     default:
//         alert ("Enter a value between 0 - 100");     
// }
