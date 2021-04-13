const LoginService = require("../service/login");
const videoService = require("../service/video");
module.exports = {
    recommendedVideo: async (ctx,next) => {
        ctx.body = await videoService.recommendedVideo();
    }
};
