// math 모듈을 불러와서 사용

// const add = require("./math");
// console.log(add(5, 7));

const hello = require("./math");
console.log(hello(3, 4));

////////////////
// math2 모듈 불러오기
const math2 = require("./math2");
console.log(math2.add(3, 4));
console.log(math2.PI);
// 구조분해할당
const { add, PI } = require("./math2");
console.log(add(3, 40));
console.log(PI);
