const router = require("koa-router")();
const videoController = require("../controller/video");

module.exports = (app) => {
    router.post("/api/recommendedVideo",videoController.recommendedVideo);
    app.use(router.routes()).use(router.allowedMethods());
};
