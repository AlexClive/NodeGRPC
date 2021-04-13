const LoginService = require("../service/login");
const resourcesService = require("../service/resources");
module.exports = {
    relatedResources: async (ctx,next) => {
        ctx.body = await resourcesService.relatedResources();
    }
};
