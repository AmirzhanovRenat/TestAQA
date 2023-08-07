// let a = [1, 2, 4, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9, 4];
// let d = [];

// for (let i = 0; i < a.length; i++) {
//   for (let k = 0; k < b.length; k++) {
//     if (a[i] == b[k]) {
//       for (let j = 0; j < c.length; j++) {
//         if (c[j] == b[k]) {
// console.log(c[j],a[i],b[k]);
//           d.push(c[j])
//         }
//       }
//     }
//   }
// }

// console.log(d);
// ********************************
// let a = [1, 2, 3, 4];
// let b = [6, 8, 7, 4];
// for (let elem of a){
//   b.push(elem)
// }
// console.log(b);
// *********************************
// let a = [1, 2, 3, 5];
// let b = [1, 2, 3, 5];

// let a1 = JSON.stringify(a) === JSON.stringify(b)
// console.log(a1);
// ????????????????????????

// let a = [1, 2, 3, 5];
// let b = [1, 2, 3, ];

// let was =
//   a.length === b.length && a.every((value, index) => value === b[index]);

// console.log(was);
// *************************************
// let i = 0;

// function func() {
//   console.log(i++);
//   if (i >= 0) {
//     setTimeout(() => {
//       func();
//     }, 1000);
//   }
// }

// func();
// **********************************
// факториал числа
// function func(a) {
//   if (a === 0) {
//     return 1;
//   } else {
//     return a * func(a - 1);
//   }
// }
// console.log(func(5));

// ************************************************

// class User {
//   #name;
//   #surn;
//   constructor(name, surn) {
//     this.#name = name;
//     this.#surn = surn;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(name) {
//     return (this.#name = name);
//   }

//   getSurn() {
//     return this.#surn;
//   }
//   setSurn(surn) {
//     return (this.#surn = surn);
//   }
// }

// let a = new User('ivan', 'Elekin');
// a.setSurn('bobobo');
// console.log(a.getSurn());
// ******************************************************
// //Palindrome
// function func(par) {
//   let met = par.toLowerCase();

//   return (
//     met ===
//     par
//       .toLowerCase()
//       .split('')
//       .reduceRight((sum, calc) => {
//         sum = sum + calc;
//         return sum;
//       })
//   );
// }
// console.log(func('gggg'));
// ******************************************************

// let arr = ['слово', 'Слово', '1 Слово', '2 Слова'];

// console.log(
//   arr.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//   })
// );
// *********************************************************

// function func(y) {
//   let arr = [2, 1, 2, 3];

//   let x = true;

//   for (const item of arr) {
//     if (item >= y) {
//       console.log(item);
//       x = true;
//     } else {
//       x = false;
//     }
//     return x;
//   }
// }
// console.log(func());
// ************************************************

// !with измена значения по индексу
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b = arr.with(0, 10);
// console.log(b);
//* toReversed создает новый масив не затрагивая оригинал
// let rev = [1, 2, 3, 4, 5, 6];
// let b = rev.toReversed();
// let c = rev.reverse();
// console.log(rev);
//? toSpliced() создает новый масив не затрагивая оригинал
// let arr = [1, 2, 3, 4, 5, 6];
// let a = arr.toSpliced(2, 1);
// arr.splice(3, 1);
// console.log(arr);
//todo toSorted()  создает новый масив не затрагивая оригинал
// let arr = [1, 9, 6, 5, 8, 7, 4, 2];
// let a = arr.toSorted();
// console.log(arr);
//****** */
// let arr = [1, 2, 3, 4, [5, [6, [2, 5, 4, [6, 5, [5]]]]]];
// let a = arr.flat(Infinity);
// console.log(a);

// let a = [1, 2, 3, 65,6];
// let b = [2, 5, 6, 9, 8];

// let v = a.sort();

//  for (let i = 0; i < v.length; i++) {
// if(v[i])

//  }
//АНАГРАММА
// function func(par, par1) {
//   let str = par.toLowerCase();
//   let str1 = par1.toLowerCase();

//   if (str.length !== str1.length) {
//     return false;
//   }

//   let b = str.split('').sort();
//   let c = str1.split('').sort();

//   for (let i = 0; i < b.length; i++) {
//     if (b[i] === c[i]) {
//       console.log('b[i] :>> ', b[i]);
//       console.log('c[i] :>> ', c[i]);
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(func('mama', 'mmaa'));
//Нечетная медиан
// let a = [25, 66, 99887, 22, 21, 6, 9, 89, 4, 1, 1];
// let r = Math.floor(a.length / 2);
// console.log(a[r]);
// //четная медианв
// let aa = [25, 66, 1, 6];
// let rw = Math.ceil(aa.length / 2);
// console.log(aa[rw - 1] + aa[rw]);

// console.log(r);
// console.log(a[r]);

//Медиана
// function func(a) {
//   if (a.length % 2 == 0) {
//     let r = Math.ceil(a.length / 2);
//     return a[r] + a[r - 1];
//   } else if (a.length % 2 != 0) {
//     let d = Math.ceil(a.length / 2);
//     return a[d - 1];
//   }
// }
// console.log(func([1, 2, 3, 5, 6, 33,3]));

//Палиндром
// function func(str) {
//   let a = str.toLowerCase();
//   return (
//     a ===
//     str
//       .toLowerCase()
//       .split('')
//       .reduceRight((a, s) => {
//         return (a += s);
//       })
//   );
// }

// console.log(func('lool'));

// let arr = [
//   [1, 2, 3],
//   [2, 5, 4],
// ];

// let arr = [1, 2, 3, 4, 5, 6];

// let b = arr.flatMap((a) => [`${a} ** 2 ==`, a ** 2]);
// console.log(b);

// console.log(arr.indexOf(4, 3));
// let a = [1, 2, 4, 5, 6];
// let b = [3, 3, 5, 1, 6];
// let c = [2, 3, 4, 1, 5, 6];
// let arr2 = [];

// for (let i = 0; i < a.length; i++) {
//   for (let k = 0; k < b.length; k++) {
//     if (a[i] == b[k]) {
//       for (let j = 0; j < c.length; j++) {
//         if (c[j] == b[k]) {
//           console.log(c[j]);
//           arr2.push(c[j]);
//         }
//       }
//     }
//   }
// }

// console.log(arr2);

// let arr = [1, 2, 3, 9, 6, 5, 6, 9, 8, 9, 9, 6, 3, 8];

// function func(par) {
//   if (par.length % 2 == 0) {
//     let a = par.length / 2;
//     return par[a] + par[a - 1];
//   } else if (par.length % 2 !== 0) {
//     let b = par.length / 2;
//     let c = Math.floor(b);
//     return par[c];
//   }
// }

// console.log(func(arr));

// function func(a, b) {
//   let par2 = b.toLowerCase().split('');
//   let par1 = a.toLowerCase().split('');

//   if (par1.length !== par2.length) {
//     return false;
//   }

//   let r1 = par1.sort();
//   let r2 = par2.sort();

//   // console.log(r1, r2);
//   for (let i = 0; i < r1.length; i++) {
//     if (r1[i] === r2[i]) {
//       console.log('r1[i] :>> ', r1[i]);
//     }
//   }
//   return true;
// }

// console.log(func('2ss', 's2s'));
// // console.log(2333);

// const sort = (str) => str.toLowerCase().split('').sort().join('');

// const isAnagram = (original, test) =>
//   original === test ? false : sort(original) === sort(test);

// console.log(isAnagram('mam', 'aMm'));
// //Анограмма
// function func(par1, par2) {
//   let a = par1.toLowerCase().split('').sort().join('');
//   let b = par2.toLowerCase().split('').sort().join('');

//   // if (par1 === par2) {
//   //   return false;
//   // } else if (a === b) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(func('mam', 'mam'));

// let a = [1, 2, 3, 4, 5, 6];

// let b = [1, 2, 3, 4, 5];

// let r = a.join('');

// let y = b.join('');

// let rrr = r === y ? true : false;
// console.log(rrr);

// let a = [1, 2, 3, 6, 5, 4, 7, 8, 93333];
// // function func(par) {
// //   for (let i = 0; i < a.length; i++) {
// //     console.log(a[i]);
// //   }
// // }
// // log;
// // func();

