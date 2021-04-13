const conditionService = require("../service/condition");
module.exports = {
    filter: async (ctx,next)=>{
        ctx.body = await conditionService.filter();
    }
};
