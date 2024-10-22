const models = require("../models/index");
const User = models.User;

const get_signup = (req, res) => {
  res.render("signup");
};

const get_signin = (req, res) => {
  res.render("signin");
};

const get_profile = async (req, res) => {
  console.log("get_profile", req.params);

  const result = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  console.log("result", result); // {}

  if (result !== null)
    res.render("profile", { data: result, message: "조회완료" });
  else {
    res.render("profile", { data: null, message: "존재하는 회원 없음" });
  }
};

const post_signup = async (req, res) => {
  console.log("post_signup", req.body);

  const { userid, name, pw } = req.body;
  const result = await User.create({ userid, name, pw });
  res.json({ result: true });
};

const post_signin = async (req, res) => {
  console.log("post_signin", req.body);
  const { userid, pw } = req.body;

  // SELECT * FROM user WHERE userid = ? and pw = ?
  const result = await User.findOne({ where: { userid, pw } });
  console.log("result", result); // {}

  if (result !== null) res.json({ isLogin: true, id: result.id });
  else res.json({ isLogin: false, id: null });
};

const edit_profile = async (req, res) => {
  console.log("edit_profile", req.body);
  const { name, pw, id } = req.body;

  // UPDATE user SET name = ?, pw = ? where id = ?
  const result = await User.update(
    {
      name,
      pw,
    },
    {
      where: { id },
    }
  );
  res.send("회원 정보 수정 성공");
};

const delete_profile = async (req, res) => {
  console.log("delete_profile", req.body);
  const result = await User.destroy({ where: { id: req.body.id } });
  res.send("회원 탈퇴 성공");
};

module.exports = {
  get_signup,
  get_signin,
  get_profile,
  post_signup,
  post_signin,
  edit_profile,
  delete_profile,
};
