module.exports={
    logIn:async (ctx)=>{
        let whetherToLogIn;
        if(ctx.cookies.get("WFMed.Auth.Test") != undefined){
            whetherToLogIn = true;
        }else {
            whetherToLogIn = false;
        }
        return whetherToLogIn;
    }
};
