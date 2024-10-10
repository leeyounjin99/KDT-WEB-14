// Promise 객체 (프로미스)
// - 비동기 함수를 동기처리하기 위해 만든 객체
// - 미래에 성공/실패에 대한 결과 값을 "약속"한다는 의미
// - 성공, 실패 분리해서 반환
// - 성공 then, 실패 catch 메서드로 이어 받아서 처리 가능
// Pending : 대기, Fullfilled : 이행, Rejected : 거부, Settled : 결론

// 1. promise 객체 생성 코드
/*
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(`현재 프로미스의 상태는 fullfilled(이행)! then 메서드로 연결~
        이 때 flag 값은 ${flag}`);
    } else {
      reject(`현재 프로미스의 상태는 rejected(거절)! catch 메서드로 연결~
        이 때 flag 값은 ${flag}`);
    }
  });
}

// 2. promise를 사용 하는 코드
promise1(5 > 3)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // 가장 마지막에 선택사항, 성공과 실패 상관없이 실행
    console.log("finally");
  });

// 화살표 함수로도 사용 가능!
promise1(5 > 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 가장 마지막에 선택사항, 성공과 실패 상관없이 실행
    console.log("finally");
  });
*/
//////////////////////////////////////
// 2. 프로미스 예제
/*
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다..");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // 3초 기다린 후에 코드 실행 (3초 고민)
    setTimeout(function () {
      console.log("고민끝!");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격: ${price}`);
}

let product;
let price;
goMart();
pickDrink().then(() => {
  pay(product, price);
});
// pay(product, price);
*/
//////////////////////////////////////
// 3. 프로미스 체이닝
// 함수를 이용해서 (4 + 3) * 2 - 1 = 13
// add -> mul -> sub

// 1) 콜백함수 사용
/*
function add(n1, n2, callback) {
  setTimeout(function () {
    const result = n1 + n2; // 7
    callback(result); // callback(7)
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    const result = n * 2; // 14
    callback(result); // callback(14)
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    const result = n - 1; // 13
    callback(result); // callback(13)
  }, 500);
}

add(4, 3, function (x) {
  console.log('1: ', x); // 7
  mul(x, function (y) {
    console.log('2: ', y); // 14
    sub(y, function (z) {
      console.log('3: ', z); // 13
    });
  });
});
*/

// 2) 프로미스 체이닝 사용
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2; // 7
      resolve(result); // resolve(7)
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n * 2; // 14
      // resolve(result); // resolve(14)
      reject(new Error("의도적으로 발생시킨 에러!"));
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1; // 13
      resolve(result); // resolve(13)
    }, 500);
  });
}

add(4, 3)
  .then((result) => {
    console.log("1: ", result); // 7
    return mul(result);
  })
  .then((result) => {
    console.log("2: ", result); // 14
    return sub(result);
  })
  .then((result) => {
    console.log("3: ", result); // 13
  })
  .catch((error) => {
    console.log(error);
  });
