const LoginService = require("../service/login");
module.exports = {
    /*表单页面，提交地址为/user/login*/
    user: async (ctx, next) => {
        ctx.body = `
        <form action="/user/login" method="post">
            <input name="name" type="text" placeholder="请输入用户名"><br/>
            <input name="password" type="password" placeholder="请输入密码"><br/>
            <button>登录</button>
        `
    },
    login: async (ctx, next) => {
        /* ctx.request.body 为解析post数据对象*/
        let {name, password} = ctx.request.body;
        let userdata = await LoginService.getUserdata(name);
        if (name == userdata.username && password == userdata.password) {
            ctx.body = `Hello ${name}`
        } else {
            ctx.body = '账户密码错误'
        }
    }
};
