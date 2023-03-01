"use strict";

// 커스텀 구조 - 이렇게 사용합니다.
// frontend - npm i dotenv multer serve-favicon  
// backend - npm i dotenv multer mysql cors

// // dotenv 모듈 연동
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");


// // 파비콘 업데이트 연동
// const favicon = require("serve-favicon");
// // multer 모듈 연동
// const multer = require("./config/multer_config");
// const upload = multer.config();
// // cors 모듈 연동
// const cors = require("cors");
// let corsOptions = {
// origin: "*", // 모든걸 허용
//  // origin: [""] // 특정 url만 허용 
//  credentials: true
//  };

// // express 시작
const app = express();
const indexRouter = require("./routes/index");

// // cors 모듈 사용
// app.use(cors(corsOptions));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
// // 로거
app.use(logger("dev"));
// // express 기본 모듈
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// // 쿠키파서 등록
app.use(cookieParser());
// // vscode 파일 경로 쉽게 찾게 도와줌
app.use("/public", express.static(path.join(__dirname, "public")));
// // 파비콘 사용
// app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));

// // multer모듈 사용, multer config 연동
// app.use(upload.array("files"));

// // express 기본 라우팅
app.use("/", indexRouter);

// // 검색엔진 SEO
// app.get("/robots.txt", function (req, res) {
// res.type("text/plain");
// res.send("User-agent: *\nAllow: /");
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render("error.html");
});

module.exports = app;