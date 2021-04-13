const Koa = require("koa");
const bodyParser = require("koa-bodyparser"); // 解析器
const serve = require("koa-static");//静态文件管理
const historyFallback = require('koa2-history-api-fallback');
const path = require("path");
// 实例化
const app = new Koa();
app.use(bodyParser());
// response
const loginRouter = require("./routes/login");
loginRouter(app);
// 期刊
const periodical = require("./routes/periodical");
periodical(app);
// 视频
const video = require("./routes/video");
video(app);
// 资源
const resources = require("./routes/resources");
resources(app);
// 筛选条件
const condition = require("./routes/condition");
condition(app);

// 静态页指向 必须写到最后
app.use(historyFallback());
app.use(serve(path.resolve("src/dist")));

app.listen(3499,()=>{
    console.log("程序启动成功");
    console.log("http://localhost:3499/");
});
