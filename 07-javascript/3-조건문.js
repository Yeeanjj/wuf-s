// 조건문

// if문
// if (조건) {
//   실행문;
// }

// // if-else문
// if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// // if-else-if문
// if (조건) {
//   실행문;
// } else if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// 예시
function isPositive(num) {
  if (num > 0) {
    return "양수입니다.";
  } else if (num < 0) {
    return "음수입니다.";
  } else {
    return "0입니다.";
  }
}
console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(0));

// switch문
// switch (조건) {
//   case 값1:
//     실행문; //조건과 값1이 일치하면 실행
//     break;

//   case 값2:
//     실행문; //조건과 값2가 일치하면 실행
//     break;

//   default:
//     실행문; //조건과 일치하는 값이 없을 때 실행
// }

// 예시
function getSound(animal) {
  // let sound;
  switch (animal) {
    case "개":
      return "멍멍";
      break;
    case "고양이":
      return "야옹";
      break;
    case "참새":
      return "짹짹";
      break;
    case "비둘기":
      return "구구";
      break;
    default:
      return "...?";
  }
  // return sound;
}
console.log(getSound("개"));
console.log(getSound("고양이"));
console.log(getSound("예준"));

// if문으로 변환
function getSound2(animal) {
  if (animal === "개") return "멍멍";
  if (animal === "고양이") return "야옹";
  if (animal === "참새") return "짹쨱";
  if (animal === "비둘기") return "구구";
  return "...?";
}
console.log(getSound2("개"));
console.log(getSound2("고양이"));
console.log(getSound2("예준"));

// 반복문
// for문

// for(초기화; 조건; 종료식) {
// 실행문;
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 감소하는 for문
for (let i = 9; i > -1; i--) {
  if (i < 4) {
    break; // 전체 반복 종료.
  }
  console.log(i); // 9 ~ 4까지 출력
}

// continue
for (let i = 9; i > 0; i--) {
  if (i % 2 === 0) {
    // 홀수만 출력 (짝수 건너뜀)
    continue; // 현재 반복만 종료.
  }
  console.log(i);
}

// dog cat fish 배열로 만들어서 animalsA 변수에 할당
const animalsA = ["dog", "cat", "fish", "lion"];

console.log(animalsA[0]);
console.log(animalsA[1]);
console.log(animalsA[2]);

// 배열의 길이 : animalsA.length
for (let i = 0; i < animalsA.length; i++) {
  console.log(animalsA[i]);
}

// for of문
// for(변수 of 배열){
//   실행문;
// }

for (let animal of animalsA) {
  console.log(animal);
}

// 예시2
const users = [
  { name: "겨울", age: 2 },
  { name: "여울", age: 8 },
  { name: "가을", age: 1 },
];
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

for (let i = 0; i < users.langth; i++) {
  console.log(users[i]);
}

for (let user of users) {
  console.log(user);
  console.log(user.name);
}

// for in문
// for(변수 in 객체){실행문;}

const user = {
  name: "겨울",
  age: 2,
  cute: true,
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

// while문
// while (조건){실행문}

// 0~9가지 출력
let j = 0;

while (j < 10) {
  console.log(j);
  j++;
}

// do while문
// do {실행문} while (조건);

// 0 ~ 9까지 출력
let k = 0;

do {
  console.log(k);
  k++;
} while (k < 10);
