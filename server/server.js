require("dotenv").config();
//express 프레임워크 가져오기
const express = require("express");
//mongoose 가져오기
const mongoose = require("mongoose");
//express로 app 객체 만들기
const app = express();
//.env에서 PORT와 MONGO_URI 가져오기
const { PORT, MONGO_URI } = process.env;
//body-parser 가져오기
const bodyParser = require("body-parser");
//Route 가져오기
const checkInfoRoutes = require("./routes/checkInfo");
const registerRouter = require("./routes/register");
const adminRouter = require("./routes/admin");
const updateRouter = require("./routes/update");

//body-parser 관련 코드
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongoose를 이용하여 app과 몽고DB를 연결 함.
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((e) => console.error(e));

app.get("/", (req, res) => {
  res.send("Successfully send");
});
app.use("/api/checkInfo", checkInfoRoutes);
app.use("/api/register", registerRouter);
app.use("/api/admin", adminRouter);
app.use("/api/update", updateRouter);
//app 객체를 통해서 express 서버 열어주는 곳
app.listen(PORT, () => {
  console.log(`recruiting-site server listening on port ${PORT}`);
});
