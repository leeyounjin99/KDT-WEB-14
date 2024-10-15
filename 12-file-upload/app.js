const express = require("express");
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require("multer");
const path = require("path"); // 경로에 관한 내장 모듈
const upload = multer({
  dest: "uploads/", // dest 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

// multer 세부 설정
const uploadDetail = multer({
  // storage : 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done callback function
      // done(null, "~~") 여기서 null은 :  error 를 의미하는 매개변수
      // 에러가 없으므로 "null" 이라고 전달해서 콜백함수를 호출
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자" 를 추출
      console.log("ext : ", ext);
      console.log("path.basenamet", path.basename(file.originalname, ext));
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
    limits: { fileSize: 5 * 1024 * 1024 },
  }),
});

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("practice");
});

// single() 하나의 파일을 업로드
// upload.single("userfile") : ("파일의 name")
// 클라이언트 요청이 들어오면 multer 설정(upload 변수)

// req.file : 파일 업로드 정보
// req.body : 파일 외의 정보들

// {
//   fieldname: 'userfile', : 폼에 정의한 name 값
//   originalname: 'bail.jpg', // 원본 파일명
//   encoding: '7bit',  // 파일 인코딩 타입
//   mimetype: 'image/jpeg', // 파일 타입
//   destination: 'uploads/', // 파일 저장경로
//   filename: 'd177b6d3928ad641922421adf6eebbb8',
//   destination: 'uploads/',
//   destination: 'uploads/',
//   filename: 'd177b6d3928ad641922421adf6eebbb8', // destination 에 저장된 파일명
//   path: 'uploads\\d177b6d3928ad641922421adf6eebbb8', // 업로드된 파일 전체 경로
//   size: 432192 // 파일크기
// }

// app.post("/upload", upload.single("userfile"), (req,res) => {

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  res.send("파일 업로드 완료");
});

// 2. array() : 여러 파일을 한번에 업로드
// uploaDetail.array("uesrfiles")
// 파일을 업로드 한 후, req,files 객체 생성
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); // [ {파일1_정보} , {파일2_정보} ...]
  console.log(req.body);
  res.send("하나의 인풋에 여러 파일 업로드 완료!");
});

//fields() : 여러 파일의 각각의 인풋에 업로드
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfiles1" }, { name: "userfiles2" }]),
  (req, res) => {
    console.log(req.files); // [ {userfile1 : [{파일정보}], userfile2: [{...}]} ]
    console.log(req.body);
    res.send("여러 인풋에 각각의 파일을 업로드 완료!");
  }
);

// 동적 폼 전송
app.post("/dynamicFile", uploadDetail.single("dynamicUserFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`${PORT} IS OPEN`);
});

// 파일 업로드 실습

app.post("/upload/prac", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  const file = req.file;
  const url =
    path.basename(req.body.name, path.extname(file.originalname)) +
    path.extname(file.originalname);
  console.log(url);
  res.render("result", {
    url: url,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
  });
});
