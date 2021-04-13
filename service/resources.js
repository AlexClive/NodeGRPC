module.exports = {
    relatedResources:async ()=> {
        let list = [
            {txt: '知识库', src: 'http://lczl.med.wanfangdata.com.cn/'},
            {txt: '图书', src: 'http://book.med.wanfangdata.com.cn/'},
            {txt: '视频', src: 'http://v.med.wanfangdata.com.cn/'},
            {txt: '作者空间', src: 'http://analytics.med.wanfangdata.com.cn/Author/Index'},
            {txt: '机构空间', src: 'http://analytics.med.wanfangdata.com.cn/Organization/Index'},
            {txt: '健康教育课程', src: 'http://analytics.med.wanfangdata.com.cn/Organization/Index'},
            {txt: '学科分析', src: ''},
            {txt: '科研诚信', src: ''},
            {txt: '······', src: ''},
        ];
        let data = {
            list: list,
            status: 200,
            msg: '数据请求成功'
        };
        return data;
    }
};
