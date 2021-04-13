const router = require("koa-router")();
const resourcesController = require("../controller/resources");

module.exports = (app) => {
    router.post("/api/relatedResources",resourcesController.relatedResources);
    app.use(router.routes()).use(router.allowedMethods());
};
