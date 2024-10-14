const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = {
  id: "aass",
  pw: "1234",
};

app.get("/", (req, res) => {
  res.render("practice2");
});

// ajax get
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// ajax post
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios get
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// axios post
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch get
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// fetch post
app.get("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios get 실습
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`port is opening on ${PORT}`);
});

// 로그인 실습
const validId = "user";
const validPw = "1234";

app.post("/login", (req, res) => {
  const { id, password } = req.body;

  if (id === validId && password === validPw) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});
