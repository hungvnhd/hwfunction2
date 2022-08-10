// bai 1

// let a = Number(prompt("nhập số a"));
// let b = Number(prompt("nhập số b"));
// function sum2n(a, b) {
//   result = a + b;
//   alert(result);
//   return result;
// }
// sum2n(a, b);

//bai 2

// array = [1, 2, 3, 4, 5, 6];
// let a = 0;

// function tongLe(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       a = a + array[i];
//     }
//   }
//   alert(a);
//   return a;
// }
// tongLe(array);

//bai 3

// let a = Number(prompt("nhap so a"));
// let b = Number(prompt("nhap so b"));
// function ktra(a, b) {
//   if (a > b) {
//     alert(`${a} is greater than ${b}`);
//   } else {
//     alert(`sum of ${a} and ${b} is ${a + b}`);
//   }
// }
// ktra(a, b);

//bai 4:

// function addNumbers() {
//   firstNum = 4;
//   secondNum = 8;
//   result = firstNum + secondNum;
//   alert(result);
//   return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();

//bai 5:
// let foot = Number(prompt("input length in foot"));
// function footToMeter(foot) {
//   result = foot * 0.305;
//   console.log(result);
//   return result;
// }
// footToMeter(foot);

// let meter = Number(prompt("input length in meter"));
// function meterToFoot(meter) {
//   result = meter * 3.279;
//   console.log(result);
//   return result;
// }
// meterToFoot(meter);

//bai 6
// let number = Number(prompt("moi nhap so bat ki de kiem tra"));
// function isPrime(number) {
//   let state = true;

//   if (number < 2) {
//     state = false;
//   } else if (number === 2) {
//     state = true;
//   } else if (number % 2 === 0) {
//     state = false;
//   } else {
//     for (let i = 3; i < number - 1; i = i + 2) {
//       if (number % i === 0) {
//         state = false;
//         break;
//       }
//     }
//   }
//   if (state === true) {
//     console.log(`${number} la so nguyen to`);
//   } else {
//     console.log(`${number} ko phai so nguyen to`);
//   }
//   return state;
// }

// let a = "";
// for (let i = 0; i < 100; i++) {
//   if (isPrime(i) === true) {
//     a = a + "," + i;
//   }
// }
// console.log(a.replace(",", ""));
