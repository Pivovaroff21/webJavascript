//? First task

const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

function getRow(row) {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] == "a" || row[i] == "а") {
      sum += 1;
    }
  }
  return sum;
}

moreA = getRow(firstRow) > getRow(secondRow) ? firstRow : secondRow;
console.log(moreA);

// ?Task *

function getUserRow(row, userLetter) {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] == userLetter) {
      sum += 1;
    }
  }
  return sum;
}

title = "Введите строку";
let firstRow1 = prompt(title, "мама мыла раму");
let secondRow1 = prompt(title, "собака друг человека");
let userLetter = prompt("Какую букву искать??", "a");

moreA =
  getUserRow(firstRow1, userLetter) > getUserRow(secondRow1, userLetter)
    ? firstRow1
    : secondRow1;
alert(`Больше букв '${userLetter}' в строке: '${moreA}'`);

//?Second task first variant
// let phoneNumber = "";
// const countryCode = "+38";
// let operatorCode = "";
// let phoneBody = "";

// function formattedPhone(phoneNumber) {
//   let startIndex = phoneNumber.startsWith(countryCode) ? 3 : 0;
//   let counter = 0;
//   let counterMax = startIndex;
//   for (startIndex; startIndex < phoneNumber.length; startIndex++) {
//     if (counter <counterMax) {
//       operatorCode += phoneNumber[startIndex];
//     } else {
//       phoneBody += phoneNumber[startIndex];
//     }
//     counter += 1;
//   }
//   return `${countryCode} (${operatorCode}) ${phoneBody.slice(
//     0,
//     3
//   )}-${phoneBody.slice(3, 5)}-${phoneBody.slice(5, 8)}`;
// }

// while (phoneNumber.length < 10) {
//   phoneNumber = prompt("Введите телефон", "0500805049");
//   if (phoneNumber.length < 10) {
//     alert("Это не номер телефона");
//   }
// }

// alert(formattedPhone(phoneNumber));

// ? Second 2 variant2

let phoneNumber = "";

while (phoneNumber.length < 10) {
  phoneNumber = prompt("Введите телефон", "0500805049");
  if (phoneNumber.length < 10) {
    alert("Это не номер телефона");
  }
}

function formatPhone(phoneNumber) {
  if (phoneNumber.includes("+38")) {
    phoneNumber = phoneNumber.replace("+38", "");
  } else if (phoneNumber.startsWith("38")) {
    phoneNumber = phoneNumber.replace("38", "");
  }
  return `+38 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
}

alert(formatPhone(phoneNumber));
