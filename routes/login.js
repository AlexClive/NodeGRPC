const router = require("koa-router")();
const loginController = require('../controller/login');

module.exports = (app) => {
    router.get('/user',loginController.user);
    router.post('/user/login',loginController.login);
    app.use(router.routes()).use(router.allowedMethods());
};



