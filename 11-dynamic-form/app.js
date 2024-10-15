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
  res.render("prantice1");
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

// 실습
app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/practice1-get", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.json(req.query);
});

app.post("/practice2", (req, res) => {
  console.log(req.body);
  if (userInfo.id === req.body.userId && userInfo.pw === req.body.userPw) {
    res.json({ userInfo: req.body, isSuccess: true });
  } else {
    res.json({ isSuccess: false });
  }
});
