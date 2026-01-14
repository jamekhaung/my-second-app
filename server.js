const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// --- 随机设置账号和密码 ---
const RANDOM_USER = "admin"; // 账号固定为 admin
const RANDOM_PASS = Math.random().toString(36).slice(-8); // 随机生成 8 位字符串密码

console.log("========================================");
console.log(`您的随机登录账号是: ${RANDOM_USER}`);
console.log(`您的随机登录密码是: ${RANDOM_PASS}`);
console.log("========================================");

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 验证逻辑
  if (username === RANDOM_USER && password === RANDOM_PASS) {
    res.json({ success: true, message: "登录成功！" });
  } else {
    res.json({ success: false, message: "用户名或密码错误" });
  }
});

app.listen(3000, () => {
  console.log("服务器已启动：http://localhost:3000");
});
