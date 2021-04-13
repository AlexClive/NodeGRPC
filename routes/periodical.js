const router = require("koa-router")();
const periodicalController = require("../controller/periodical");

module.exports = (app) => {
    router.post("/api/recommendedJournal",periodicalController.recommendedJournal);
    app.use(router.routes()).use(router.allowedMethods());
};
