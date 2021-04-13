module.exports = {
    getUserdata: async (username)=>{
        /*这里结合数据库操作，通过username 获取数据库中的用户数据*/
        let userdata = {username: 'admin', password:'123456'}
        /*返回查询到的userdata*/
        return userdata;
    }
};
