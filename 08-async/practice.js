/* function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function call(cb) {
  setTimeout(function () {
    console.log(back);
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

call("kim", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "을 실행했구나");
    hell(function (message) {
      console.log("여기는 " + message);
    });
  });
});
*/

/*
function callName(name) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function callBack() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

callName("kim")
  .then((name) => {
    console.log(name + " 반가워");
    return callBack();
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then((message) => {
    console.log("여기는 " + message);
  });

*/

function callName(name) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function callBack() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  const name = await callName("kim");
  console.log(name + " 반가워");

  const txt = await callBack();
  console.log(txt + "을 실행했구나");

  const message = await hell();
  console.log("여기는 " + message);
}

exec();
