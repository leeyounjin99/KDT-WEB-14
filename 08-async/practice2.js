/*
setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "orange";
    setTimeout(function () {
      document.body.style.backgroundColor = "yellow";
      setTimeout(function () {
        document.body.style.backgroundColor = "green";
        setTimeout(function () {
          document.body.style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

function changeColor(color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve(color);
    }, 1000);
  });
}

changeColor("red")
  .then(() => changeColor("orange"))
  .then(() => changeColor("yellow"))
  .then(() => changeColor("green"))
  .then(() => changeColor("blue"));

async function changeColors() {
  await changeColor("red");
  await changeColor("orange");
  await changeColor("yellow");
  await changeColor("green");
  await changeColor("blue");
}

changeColors();
