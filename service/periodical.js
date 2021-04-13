module.exports = {
    recommendedJournal: async ()=>{
        let list = [
            {
                title:'心肺血管病杂志',
                src:'http://med.wanfangdata.com.cn/Periodical/xfxgbzz',
                img:'http://img.wanfangmed.com.cn/imgs/qkindeximg/xfxgbzz/xfxgbzz.jpg'
            },
            {
                title:'中国循环杂志',
                src:'http://med.wanfangdata.com.cn/Periodical/zgxhzz',
                img:'http://img.wanfangmed.com.cn/imgs/qkindeximg/zgxhzz/zgxhzz.jpg'
            },
            {
                title:'中华高血压杂志',
                src:'http://med.wanfangdata.com.cn/Periodical/gxyzz',
                img:'http://img.wanfangmed.com.cn/imgs/qkindeximg/gxyzz/gxyzz.jpg'
            },
            {
                title:'中华老年心脑血管病杂志',
                src:'http://med.wanfangdata.com.cn/Periodical/zhlnxnxgbzz',
                img:'http://img.wanfangmed.com.cn/imgs/qkindeximg/zhlnxnxgbzz/zhlnxnxgbzz.jpg'
            },
            {
                title:'中华心血管病杂志',
                src:'http://med.wanfangdata.com.cn/Periodical/zhxxgb',
                img:'http://img.wanfangmed.com.cn/imgs/qkindeximg/zhxxgb/zhxxgb.jpg'
            }]
        let data = {
            list:list,
            status: 200,
            msg:'数据请求成功'
        };
        return data;
    }
};
