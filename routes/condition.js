const router = require("koa-router")();
const conditionController = require("../controller/condition");

module.exports = (app) => {
    router.post('/api/filter',conditionController.filter);
    app.use(router.routes()).use(router.allowedMethods());
};
