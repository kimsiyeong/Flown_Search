const express = require("express");
const app = express();
const db = require('./config/database');
require("dotenv").config();

const searchRouter = require('./routes/searchRoute');
app.use(searchRouter);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json());


// 서버 실행
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
