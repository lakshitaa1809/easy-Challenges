//1.Addition of given numbers
const num1 = 5,
  num2 = 13,
  num3 = 7,
  num4 = 21,
  num5 = 48;
const add = num1 + num2 + num3 + num4 + num5;
console.log("total", add);
//2.Find a given number even or odd
/*let number = prompt("Enter a Number");
if (number % 2 == 0) {
  console.log("The given number is EVEN");
} else {
  console.log("The given number is ODD");
}*/
//3. TO find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const n1 = 129,
  n2 = 251;
if (n1 > n2) {
  console.log(n1, "is a Maximum Number");
} else {
  console.log(n1, "is a Minimum Number");
}
//4.To find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const m1 = 8;
const m2 = 23;
const m3 = 17;
if (m1 > m2) {
  if (m1 > m3) {
    console.log("Maximum Number:", m1);
  } else if (m2 > m3) {
    console.log("Maximum Number:", m2);
  }
  console.log("Maximum Number:", m3);
} else {
  if (m2 > m3) {
    console.log("Maximum Number:", m2);
  } else if (m3 > m1) {
    console.log("Maximum Number:", m3);
  } else {
    console.log("Maximum Number:", m1);
  }
}
//5.To find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const x1 = 35,
  x2 = 29,
  x3 = 46;
if (x1 < x2) {
  if (x1 < x3) {
    console.log("Minimum Number:", x1);
  } else if (x2 < x3) {
    console.log("Minimum Number:", x2);
  }
  console.log("Minimum Number:", x3);
} else {
  if (x2 < x3) {
    console.log("Minimum Number:", x2);
  } else if (x3 < x1) {
    console.log("Minimum Number:", x3);
  } else {
    console.log("Minimum Number:", x1);
  }
}
//To take a month as an input from the user and find out whether the month has 31 days or not.
var month = prompt("Enter the name of the month");
switch (month) {
  case "January":
    console.log("This month has 31 days");
    break;
  case "February":
    console.log("This month has only 28 days");
    break;
  case "March":
    console.log("This month has 31 days");
    break;
  case "April":
    console.log("This month has 30 days");
    break;
  case "May":
    console.log("This month has 31 days");
    break;
  case "June":
    console.log("This month has 30 days");
    break;
  case "July":
    console.log("This month has 31 days");
    break;
  case "August":
    console.log("This month has 31 days");
    break;
  case "September":
    console.log("This month has 30 days");
    break;
  case "October":
    console.log("This month has 31 days");
    break;
  case "November":
    console.log("This month has 30 days");
    break;
  case "December":
    console.log("This month has 31 days");
    break;
    Default: console.log("Enter a correct Month");
}
