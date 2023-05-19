// let a = [1, 2, 4, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9, 4];
// let d = [];

// for (let i = 0; i < a.length; i++) {
//   for (let k = 0; k < b.length; k++) {
//     if (a[i] == b[k]) {
//       for (let j = 0; j < c.length; j++) {
//         if (c[j] == b[k]) {
//           // console.log(c[j],a[i],b[k]);
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
// **********************************************

let a = 'olo';

function func(str) {
  let strA = str.toLowerCase();

  return (
    strA ===
    str
      .toLowerCase()
      .split('')
      .reduceRight((sum, calc) => {
        sum = sum + calc;
        return sum;
      })
  );
}

func('ffff');
