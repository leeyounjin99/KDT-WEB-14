// async - await
// async : 함수 앞에 붙이는 키워드
// - 힘수만 보고도 비동기 함수임을 유추하고자 함
// - 프로미스를 반환

// await : 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 오게 됨
// - async 키워드를 사용한 함수 안에서만 await 키워드 사용 가능!

// 예제 1
async function f1() {
  return 1;
}
console.log("1 >>", f1()); // Promise {<fulfilled>: 1}

f1().then((result) => {
  console.log(result);
});

// 예제 2
// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "레몬", "수박"];
      // resolve(fruits);
      reject(new Error("알 수 없는 에러 발생"));
    }, 1000);
  });
}

// then - catch
fetchFruits()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// async-await 사용시 에러처리는 try-catch 구문으로 함!
async function printFruits() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printFruits();

///////////////////////////////////////

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

async function exec() {
  goMart();
  await pickDrink();
  pay(product, price);
}

let product;
let price;
exec();
