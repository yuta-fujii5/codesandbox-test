//続き

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arry4 = [10, 20];
// const arry5 = [30, 40];

// const arry6 = [...arry4];
// console.log(arry6);

// const arry7 = [...arry4, ...arry5];
// console.log(arry7);

/**
 * mapやfilterを使った配列の処理
 */

//const nameArry = ["祐太", "諒佑", "馨子", "賢治"]
// //  for (let i = 0; i < nameArry.length; i++) {
// //    console.log(nameArry[i]);
// //  }

//  const nameArry2 = nameArry.map((name) => {
//    return name;
//  })

//  console.log(nameArry2);

// const numArry = [1, 2, 3, 4, 5];
// const numArry2 = numArry.filter((num)=> {
//   return num % 2 === 1;
// });

// console.log(numArry2);

//馨子いがいには”君”をつけた新しい配列を用意したい
// const newNamearry = nameArry.map((name) => {
//   if (name === "馨子") {
//     return name;
//   } else {
//     return `${name}君`;
//   }
// })

// console.log(newNamearry);

/**
 * 三項演算子
 */

//ある条件？　条件がtrueの時　:条件がfalseの時
//  const val1 = 1 < 0 ? 'true' : 'false'
//  console.log(val1);

// const num = 1300;

// const formattedNum =  typeof num === 'number'? num.toLocaleString() : '数値を入力してください。'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています。' : '100以下です';
// }

// console.log(checkSum(1, 12));

/**
 * 論理演算子の本当の意味 && ||
 */
// const flug1 = true;
// const flug2 = false;

//  if (flug1 || flug2) {
//    console.log("1か２はtrueになります");
//  };

//  if (flug1 && flug2) {
//    console.log("1も２もtrueになります");
//  };
