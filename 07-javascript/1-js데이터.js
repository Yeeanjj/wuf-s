//  string (문자열)
const string1 = "hello"; // 큰다옴표 가능
const string2 = "odada"; // 작은따옴표 가능
const string3 = `바보 ${string1} ${1 + 1}`; // 백틱 가능

console.log(string1, string2, string3);

// number (숫자)
const number = 123;
const negative = -123;
const float = 3.14;

console.log(number + 1);
console.log(negative + number);
console.log(float + negative);

const number2 = -123.123;

console.log(number2 + undefined);
console.log(typeof (number2 + undefined));

// 숫자로 변환

const a = 0.1;
const b = 0.2;

console.log(a + b);
console.log((a + b).toFixed(1));
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));

// boolean (참과 거짓)

const truthy = true;
const falsy = false;

if (falsy) {
  console.log("truthy");
}

// null

let age = null;
console.log(age);

// 재할당의 경우 let 사용 X
age = 20;
console.log(age);

// undefined

let height;
console.log(height);

height = "name";
console.log(height);

// ex
const user1 = {
  name: "yeeanj",
  age: 20,
  height: 160,
  email: null,
};

console.log(user1.name, user1.age, user1.height, user1);
console.log(user1.email); //null
console.log(user1.weight); //undefined

// array 배열
const animals = ["dog", "cat", "rabbit"];

console.log(animals);
console.log(animals[0]); //dog
console.log(animals[2]); //rabbit
console.log(animals.length); //3
console.log(animals[animals.length - 1]); //rabbit

//object 객체
const user2 = {
  name: "yeeanjj",
  age: 20,
};

console.log(user2);
console.log(user2.name); // yeeanjj
console.log(user2.age); // 20
console.log(user2["name"]); // yeeajj
console.log(user2["age"]); // 20

//ex
const userA = {
  name: "kim",
  age: "50",
};
const userB = {
  name: "lee",
  age: "20",
  parent: userA,
};

console.log(userB);
console.log(userB.parent); // userA
console.log(userB.parent.name); // kim
console.log(userB["parent"]["name"]); //kim

// 배열에 객체 넣기
const users = [userA, userB];

console.log(users[0]); // {name: 'kim', age: '50'}
console.log(users[0].name); // kim
console.log(users[0]["name"]); // kim

// funtion 함수
// 함수 선언식 (기명함수)
function printHello() {
  console.log("Hello");
}

printHello();

console.log(printHello); // [funtion:printHello]
console.log(printHello()); // hello

// 함수 표현식 (익명함수)
const getNumber = function () {
  return 123;
};

console.log(getNumber); // 함수 자체
console.log(typeof getNumber); // 타입 : function
console.log(getNumber()); // 123
console.log(typeof getNumber()); // 타입 : number

// type coverstion (타입 변환)
const aa = 1;
const bb = "1";

console.log(aa == bb); // true (== : 동등 연산자)
console.log(aa === bb); // false (=== : 일치 연산자)

const cc = false;
const dd = 0;

console.log(cc == dd); // true
console.log(cc === dd); // false

const ee = true;
const ff = 1;

console.log(ee == ff); // true
console.log(ee === ff); // false

// truthy (참 같은 값) & falsy (거짓 같은 값)
if (true) {
  console.log("true");
}
// if(조건문){실행문}

// 데이터 타입 확인 (typeof)
console.log(typeof "123"); // string (문자)
console.log(typeof 123); // number (숫자)
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (객체)
console.log(typeof {}); // object (객체)
console.log(typeof []); // object (객체)
console.log(typeof function () {}); // function (함수)
