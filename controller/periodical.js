const LoginService = require("../service/login");
const periodicalService = require("../service/periodical");
module.exports = {
    recommendedJournal: async (ctx,next) => {
        ctx.body = await periodicalService.recommendedJournal();
    }
};
