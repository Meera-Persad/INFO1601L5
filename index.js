/*


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

console.log(area);

let str1 ="Hello World";
let str2 = 'Hello World';
let str3 = `
    hello 
    world
`;// template literal (backtick above tab key)

console.log(str1, str2, str3);

let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
    console.log('fizzbuzz');
  }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
    console.log('fizz');
  }else if(i%5 === 0){ //no? what about just 5 then?
    console.log('buzz');
  }else{              //so its not divisible by 3 or 5 then
    console.log(i);
  }
}

function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
 }
 
 //call add passing the callbacks to it
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint)

 //prints current date
function printDate(){
  console.log(new Date().toLocaleTimeString());
}
//prints current date
function printDate(){
  console.log(Date().toLocaleTimeString());
}
     

      

 
setInterval(printDate, 1000);

let arr0 = []//empty array
let arr2 = [1, 2, 3, 4, 5, 6, 7]//initialize with elements
let arr3 = [1, 12.9, "Hi", '🎈', ]// heterogeneous array

console.log(arr2[0]);// 1
console.log(arr3[3]);//🎈

let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arrr.length; i++){
  console.log(arrr[i])
}

for (let item of arrr){// for of loop
   console.log(item);
}

let arrvar = [ -5, 16, 33, 42, 103, 344];

console.log(arrvar.includes(-5));//true

arrvar.push(11);//adds item to the end

console.log(arrvar)//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem = arrvar.pop();//removes last item

console.log(lastItem, arrvar);//11, [ -5, 16, 33, 42, 103, 344]

arr.unshift(22);//adds item to the front

console.log(arrvar);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr.shift();//removes first item
console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]

console.log(arr.join('-'));//"-5-103-16-33-344-42" joins array with provided separator

let array2 = [12, 33, 4, 5, -4, 8, 19, 25];
                
//map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = array2.map(double); 
console.log(doubledArr);

function isOdd(num){
  return num%2 !== 0; 
}
//Filter takes a test condition and returns only the element which 
//make the condition true
let odds = array2.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array 
//meets a specified condition
function has5Factor(ele){
  return ele % 5 === 0;
}

let hasFiveFactor = array2.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = array2.sort(intCompare)
console.log(ascending);

//reate a constructor a functions which builds object for us
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));
*/

//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade(student, course) {
  let sum = 0.0;
 
  for (let thecourse of student.transcript){
    if (thecourse.course === course){
        for (let grade of thecourse.grades){
          sum = sum + grade;
        }
        return sum/thecourse.grades.length;
    }

    
  }
  return -1;
}


console.log(getAverageGrade(bob, 'INFO 1603'));

function getAssignmentMark (student, course, num) {
    for (let i of student.transcript){
      if (i.course === course){
        return i.grades[num-1];
          
        }
      }
    
    return -1;
}


console.log (getAssignmentMark (bob, 'INFO 1603', 1));


 function averageAssessment(students, courseName, assignment){
    for (let k of students){
      if (students[k].transcript.course === courseName)
     {
        let sum=0;
        let count=0;
        let avg=0;
        for (let m of students[k].grades) {
          if (m === assignment) {
            sum += students[k].grades[assignment];
            count = count+1;
          }

          }
           avg = sum/count;
           return avg;
        }
       
        }
        return -1;
      }
      

      function averageAssessment (students, courseName, assignment){

        let sum = 0;
        let counter = 0;
        for (let t of students){
          for(let q of t.transcript){
              if (q.course === courseName){
                    sum += q.grades[assignment-1];
                    counter = counter +1;
                  }
                }
              }
              return sum/counter;
          }
        
       
      console.log (averageAssessment (students, 'INFO 1601', 1));
