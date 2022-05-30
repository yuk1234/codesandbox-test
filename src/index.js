/**
 * const、letの変数宣言
 */

/**
 *
 */

// var val1 = "val変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "val変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const var3 = "const変数を再宣言";
// console.log(val3);

/**
 * const で定義したオブジェクトはプロパティの変更が可能
 */
// const val4 = {
//   name: "じゃけえ",
//   age: 24
// };
// console.log(val4);

// val4.name = "jyake";
// val4.adress = "Tokyo";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);

// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * template文字列
 */
// const name = "ゆうか";
// const age = 24;
// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("ハンバーガー"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
//→省力可
// const func2 = (str) => str;

// console.log(func2("ポテトフライ"));

// const func3 = (num1,num2)=>{
//   return num1 + num2;
// };
// const func3 = (num1,num2)=>num1 + num2;

// console.log(func3(10,20));

/**
 * 分割代入
 */

// const myProfile = {
//   name:"yuka",
//   age:24
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile2 = ['ami', 22];
// const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile2;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);

// sayHello();

/**
 * スプレッド構文
 */

//  const arr1 = [1,2];
//  console.log(arr1);
//  console.log(...arr1);

//  const sumFunc = (num1, num2) => console.log(num1 + num2);
//  sumFunc(arr1[0], arr1[1]);
//  sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * map
 */

const nameArr = ["萩原", "北村", "田中"];
//  for(let index = 0; index < nameArr.length; index++){
//    console.log(nameArr[index])
//  };

//  const nameArr2 = nameArr.map((name)=>{
//   return name;
//  })
//  console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// nameArr.map((name)=> console.log(`${index + 1}番目は${name}です`));

//名前の語尾に「さん」を付ける
const newNameArr = nameArr.map((name) => {
  if (name === "田中") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);

/**
 * 参考演算子
 */
//ある条件が　？　条件がtrueの時: 条件がfalseのとき
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = "1300";
console.log(num.toLocaleString());
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 40));

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

const num7 = 100;
const fee = num7 || "金額未設定です";
console.log(fee);
