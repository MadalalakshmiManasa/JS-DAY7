let str1 = "   Hello";
let str2 = "Manasa   ";
console.log("Task 1:", str1.concat(str2));
let combined = (str1.trim() + str2.trim()).toUpperCase();
console.log("Task 1:", combined);

// Task 2
let str3 = "Hello Manasa";
console.log("Task 2:", str3.length);
let middlePortion = str3.substring(6, 12); 
console.log("Task 2:", middlePortion);
let lastIndex = middlePortion.length - 1;
console.log("Task 2:", lastIndex);
let lowerCasePortion = middlePortion.toLowerCase();
console.log("Task 2:", lowerCasePortion);

// Task 3
let char = "hi";
let str4 = "Manasa";
let upperConcat = (char + str4).toUpperCase();
console.log("Task 3:", upperConcat);
let lastSecondChar = upperConcat[upperConcat.length - 2];
console.log("Task 3:", lastSecondChar);

// Task 4
let str5 = "Madala";
let str6 = "Manasa";
let firstThree = str5.substring(0, 3); 
console.log("Task 4:", firstThree);
let lastThree = str6.substring(str6.length - 3); 
console.log("Task 4:", lastThree);
let result4 = firstThree + lastThree;
result4 = result4.charAt(0).toUpperCase() + result4.slice(1, -1) + result4.charAt(result4.length - 1).toUpperCase();
console.log("Task 4:", result4);

// Task 5
let str7 = "   Hello Mnasa  ";
let trimmed = str7.trim();
console.log("Task 5:", trimmed);
let firstCharUpper = trimmed.charAt(0).toUpperCase();
console.log("Task 5:", firstCharUpper);
let lastCharUpper = trimmed.charAt(trimmed.length - 1).toUpperCase();
console.log("Task 5:", lastCharUpper);
let specificPart = trimmed.substring(6, 11); 
console.log("Task 5:", specificPart);
let concatResult = firstCharUpper + trimmed.slice(1, -1) + lastCharUpper + specificPart;
console.log("Task 5:", concatResult);

// Task 6

var sentences = "hello there, how are you";
var sen = sentences.split(" ");
var result = sen.indexOf("are");
console.log("question 6:",result);

//smartphone
var smartphone = {
    brand: "Apple",
    model: "iPhone 16",
    price: 149999
};
Object.seal(smartphone);
smartphone.price = 45000;
var isSealed = Object.isSealed(smartphone);

console.log("question 7:",smartphone); 
console.log("question 7:",isSealed); 

//book object
var book = {
    title: "The Great",
    author: "k.S",
    publishedYear: 1925
};
Object.freeze(book);
book.publishedYear = 2023; 
var isFrozen = Object.isFrozen(book);

console.log("question 8:",book);     
console.log("question 8:",isFrozen); 

//person object
var person = {
    firstName: "Manasa",
    lastName: "Sai",
    age: 30
};
var keys = Object.keys(person);
var values = Object.values(person);

console.log("question 9:",keys);  
console.log("question 9:",values);

//course object
var course = {
    title: "JavaScript Basics",
    instructor: "Manasa",
    duration: "4 months"
};
var entries = Object.entries(course);
console.log("question 10:",entries); 
delete course.duration;

console.log("question 10:",course);

//employee object
var employee = {
    name: "Manasa",
    position: "Software Developer",
    salary: 70000
};
Object.seal(employee);
employee.position = "Senior Software Developer";
employee.department = "IT";
var employeeProperties = Object.keys(employee);

console.log("question 11:",employee);             
console.log("question 11:",employeeProperties);  
console.log("question 11:",employee.department); 

//question 12
var a = "ManasaSai";
var middlepart = a.slice(2,5);
var  result = middlepart.toUpperCase();
console.log("question 12:",result);
//question 13
var str = "Madala Manasa";
var upperstr = str.toUpperCase();
var len = upperstr.length;
console.log("question 13:",upperstr);
console.log("question 13:",len);
//question 14
let strss = "hello";
let positions = 1;
let chars = strss.charAt(positions);
let ascii = chars.charCodeAt(0);
console.log("question 14:",chars);
console.log("question 14:",ascii);

//question 15
var str = "  helloManasa  ";
var strs = str.trim();
var slice = strs.slice(1,5);
console.log("question 15:",slice);

//question 16
var string1 = "Manasa";
var string2 = "MADALA";
var result = string1+string2.toLowerCase();

console.log("question 16:",result);

//question 17
let string = "    hello frnds";
let trimmeds = string.trimStart(); 
let slicedStr = trimmeds.slice(1); 
console.log("question 17:",slicedStr);
//question 18
let strsss = "hello";
let position = 2;
let charss = strsss.charAt(position).toUpperCase();
console.log("question 18:",charss); 

// question 19
var a = 6;
var b = 10;
var c = 20;
var result = (a * b) + c;
var comparison = result > 100;

console.log("question 19:", result);           
console.log("question 19:", comparison); 

//question 20
var x = 6;
var y = 12;
var logical = (x > 5) && (y < 20);
console.log("question 20:",logical);

//question 21
var num1 = 12;
var num2 = 24;
var r = (num1 > num2) ? "yes":"no";
console.log("question 21:",r);

//question 22
var m = 24;
var n = 12;
var subsresult = m - n;
var divsresult = m / n;
console.log("question 22:",subsresult);
console.log("question 22:",divsresult);
let isSubtractionEven = (subsresult % 2 === 0) ? "Even" : "Odd";
let isDivisionEven = (divsresult % 2 === 0) ? "Even" : "Odd";
console.log("question 22:",isDivisionEven);
console.log("question 22:",isSubtractionEven);



// question 23
var age = 24;
var Greater = (age >= 24);
var Double = (age == 24);
var Triple = (age === 24);
console.log("question 23:", Double); 
console.log("question 23:", Triple); 
console.log("question 23:", Greater); 






